import { withEmptyLayout } from 'pages-lib/_layouts';
import { useEffect } from 'react';

import {
  useQueryCurrencyQuestionId,
  useQueryShowSubmitPage,
  useMutateCurrentQuestion,
  useMutateShowSubmitPageQuestion,
  useMutateReset,
  useQueryChallengeQuestions,
  useQueryCurrentQuestionNumber,
  useQueryTotalQuestions,
  useQueryNextQuestionId,
  useQueryPreviousNextQuestionId,
  useQueryLastQuestionId,
  useQueryQuestion,
  useQueryAllQuestionsCompleted,
  useMutateAnswerQuestion
} from './states';

import LoadingPage from 'pages-lib/loading';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Question from './components/Question';
import Welcome from './components/Welcome';
import Submission from './components/Submission';

const Challenge = ({ challengeId }) => {
  const { isLoading, isError, data: chalengeInfo, error } = useQueryChallengeQuestions(challengeId);
  const currentQuestionId = useQueryCurrencyQuestionId();
  const showSubmitPage = useQueryShowSubmitPage();
  const currentQuestion = useQueryQuestion(challengeId, currentQuestionId);
  const currentQuestionNumber = useQueryCurrentQuestionNumber(challengeId, currentQuestionId);
  const totalQuestions = useQueryTotalQuestions(challengeId);
  const nextQuestionId = useQueryNextQuestionId(challengeId, currentQuestionId);
  const previousQuestionId = useQueryPreviousNextQuestionId(challengeId, currentQuestionId);
  const lastQuestionId = useQueryLastQuestionId(challengeId);
  const isAllQuestionsCompleted = useQueryAllQuestionsCompleted(challengeId);

  const { mutate: answerQuestion } = useMutateAnswerQuestion(challengeId, currentQuestionId);
  const setCurrentQuestion = useMutateCurrentQuestion();
  const setShowSubmitPageQuestion = useMutateShowSubmitPageQuestion();
  const resetChallengeState = useMutateReset();

  const isLastQuestion = currentQuestionId === lastQuestionId;
  const canNavigateNext = !!nextQuestionId || (!showSubmitPage && isAllQuestionsCompleted);
  const canNavigatePre = !!previousQuestionId || showSubmitPage;

  useEffect(() => {
    resetChallengeState();
  }, []);


  if (isLoading) {
    return (
      <LoadingPage />
    )
  }

  if (isError) {
    if (error.response.status === 404) {
      return (
        <Welcome challengeId={challengeId} />
      )
    }

    return (
      <div>Something went wrong, please try again</div>
    )
  }

  const { questions, expireTime } = chalengeInfo;

  if (!currentQuestionId && !showSubmitPage) {
    const currentQuestionId = getDefaultCurrentQuestionId(questions);
    setCurrentQuestion(currentQuestionId);
  }

  const navigations = [
    ...questions.map(question => ({
      key: question.id,
      isCurrent: currentQuestionId === question.id && !showSubmitPage,
      isCompleted: question.answers && question.answers.length > 0,
      onClick: () => setCurrentQuestion(question.id),
      disabled: false
    })), {
      key: 'submit-page-navigator',
      isCurrent: showSubmitPage,
      isCompleted: false,
      onClick: setShowSubmitPageQuestion,
      disabled: !isAllQuestionsCompleted
    }
  ];


  const handleNavigateNext = () => {
    if (isLastQuestion) {
      setShowSubmitPageQuestion()
    } else {
      setCurrentQuestion(nextQuestionId);
    }
  }

  const handleNavigatePre = () => {
    if (showSubmitPage) {
      setCurrentQuestion(lastQuestionId)
    } else {
      setCurrentQuestion(previousQuestionId)
    }
  }

  return (
    <>
      <nav className="hidden md:flex items-center justify-center mt-8" aria-label="Progress">
        <Navigation
          navigations={navigations}
        />
      </nav>
      <div className="mt-4">
        <Header
          title={showSubmitPage ? 'Submit' : `Question ${currentQuestionNumber} of ${totalQuestions}`}
          expireTime={expireTime}
          onNext={handleNavigateNext}
          canNext={canNavigateNext}
          onPrev={handleNavigatePre}
          canPrev={canNavigatePre}
        />
      </div>
      <div className="py-4 space-y-6 lg:px-0">
        {
          showSubmitPage ? (
            <Submission
              challengeId={challengeId}
            />
          ) : (
              <Question
                currentQuestion={currentQuestion}
                onAnswer={answerQuestion}
              />
            )
        }

      </div>
    </>
  )
}

const getDefaultCurrentQuestionId = (questions) => {
  var firstUnanswerQuestion = questions.find(question => !question.answers);
  return firstUnanswerQuestion?.id;
}

export default withEmptyLayout(Challenge);
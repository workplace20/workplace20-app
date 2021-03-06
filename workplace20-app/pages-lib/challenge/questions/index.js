import { useRouter } from 'next/router';
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
import {
  Navigation,
  Header,
  Question,
  Submission,
  Error
} from './components';

const Challenge = ({ challengeId }) => {
	const router = useRouter();

  const { isLoading, isError, data: chalengeInfo = {}, error } = useQueryChallengeQuestions(challengeId);
  
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
    const status = error?.response?.status;

    if (status === 404) {
      return (
        <Redirect to={`/challenges/${challengeId}/overview`}/>
      )
    }

    if (status === 400) {
      const errorMessage = error?.response?.data?.errors[0]?.message;
      return (
        <Error
          errorMessage={errorMessage}
        />
      )
    }

    return (
      <Error
        errorMessage="Something went wrong, please try again"
      />
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

  const handleTimesUp = () => router.push(`/challenges/${challengeId}/times-up`);

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
          onTimesUp={handleTimesUp}
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
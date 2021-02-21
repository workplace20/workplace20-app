
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { queryChallengeQuestionsKey } from '../keys';
import { useMutation, useQueryClient } from 'react-query';

const answerQuestion = (challengeId, questionId) => (answers) => axiosWrapper.put(`/challenges/${challengeId}/questions/${questionId}/:answer`, answers);

const useMutateAnswerQuestion = (challengeId, questionId) => {
  const queryClient = useQueryClient();

  return useMutation(answerQuestion(challengeId, questionId), {
    onMutate: (answers) => {
      queryClient.cancelQueries([queryChallengeQuestionsKey, challengeId])
      const previousChallengeInfo = queryClient.getQueryData([queryChallengeQuestionsKey, challengeId]);
      const questions = previousChallengeInfo.questions.map(question => {
        if (question.id == questionId) {
          return {
            ...question,
            answers
          }
        }

        return question;
      });

      queryClient.setQueryData([queryChallengeQuestionsKey, challengeId], {
        ...previousChallengeInfo,
        questions,
      });

      return () => queryClient.setQueryData([queryChallengeQuestionsKey, challengeId], previousChallengeInfo)
    },
    onError: (err, newTodo, rollback) => rollback(),
    // onSettled: () => {
    //   queryClient.invalidateQueries([queryChallengeQuestionsKey, challengeId])
    // },
  })
};

export default useMutateAnswerQuestion;
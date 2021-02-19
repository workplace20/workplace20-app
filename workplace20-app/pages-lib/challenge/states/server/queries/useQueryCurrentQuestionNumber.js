import { queryChallengeQuestionsKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQueryCurrentQuestionNumber = (challengeId, questionId) => {
  const queryClient = useQueryClient();
  const questionIndex = queryClient.getQueryData([queryChallengeQuestionsKey, challengeId])?.questions?.findIndex(question => question.id == questionId);

  return questionIndex + 1;
}

export default useQueryCurrentQuestionNumber;
import { queryChallengeQuestionsKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQueryQuestion = (challengeId, questionId) => {
  const queryClient = useQueryClient();
  const question = queryClient.getQueryData([queryChallengeQuestionsKey, challengeId])?.questions?.find(question => question.id == questionId);

  return question;
}

export default useQueryQuestion;
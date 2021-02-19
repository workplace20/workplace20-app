import { queryChallengeQuestionsKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQueryTotalQuestions = (challengeId) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([queryChallengeQuestionsKey, challengeId])?.questions?.length;
}

export default useQueryTotalQuestions;
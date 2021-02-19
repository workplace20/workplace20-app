import { queryChallengeQuestionsKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQueryAllQuestionsCompleted = (challengeId) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([queryChallengeQuestionsKey, challengeId])?.questions?.every(question => question.answers && question.answers.length > 0);
}

export default useQueryAllQuestionsCompleted;
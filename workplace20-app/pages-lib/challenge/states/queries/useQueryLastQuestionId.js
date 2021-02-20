import { queryChallengeQuestionsKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQueryLastQuestionId = (challengeId) => {
  if (!challengeId) return null;
  
  const queryClient = useQueryClient();
  const questions = queryClient.getQueryData([queryChallengeQuestionsKey, challengeId])?.questions;
  const question = questions && questions[questions.length - 1];

  return question && question.id;
}

export default useQueryLastQuestionId;
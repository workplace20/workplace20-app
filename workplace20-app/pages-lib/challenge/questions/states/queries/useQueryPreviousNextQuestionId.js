import { queryChallengeQuestionsKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQueryPreviousNextQuestionId = (challengeId, questionId) => {
  if (!challengeId || !questionId) return null;

  const queryClient = useQueryClient();
  const questions = queryClient.getQueryData([queryChallengeQuestionsKey, challengeId])?.questions;
  const index = questions?.findIndex(question => question.id == questionId);

  return questions && index > 0 ? questions[index - 1]?.id : null;
}

export default useQueryPreviousNextQuestionId;
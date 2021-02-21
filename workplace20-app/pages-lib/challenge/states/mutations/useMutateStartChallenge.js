import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { queryChallengeQuestionsKey } from '../keys';
import { useMutation, useQueryClient } from 'react-query';

const startChallenge = (challengeId) => () => axiosWrapper.post(`/challenges/${challengeId}/:start`);

const useMutateStartChallenge = (challengeId) => {
  const queryClient = useQueryClient();

  return useMutation(startChallenge(challengeId), {
    onSuccess: (data) => {
      queryClient.setQueryData([queryChallengeQuestionsKey, challengeId], data);
    }
  })
};

export default useMutateStartChallenge;
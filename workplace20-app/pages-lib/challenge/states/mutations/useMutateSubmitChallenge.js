
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { queryChallengeQuestionsKey } from '../keys';
import { queryProfileKey } from 'pages-lib/_states/keys';
import { useMutation, useQueryClient } from 'react-query';

const submitChallenge = (challengeId) => () => axiosWrapper.put(`/challenges/${challengeId}/:submit`);

const useMutateSubmitChallenge = (challengeId, callback) => {
  const queryClient = useQueryClient();

  return useMutation(submitChallenge(challengeId), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryProfileKey);
      queryClient.invalidateQueries([queryChallengeQuestionsKey, challengeId]);

      if (callback) {
        callback();
      }
    }
  })
};

export default useMutateSubmitChallenge;
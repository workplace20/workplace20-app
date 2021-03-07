import challengeQuestionsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';

const reset = selector({
  key: "reset_challenge_questions",
  set: ({set}) => {
    set(challengeQuestionsState, {
      showSubmitPage: false,
      currencyQuestionId: ''
    });
  }
});

const useMutateReset = () => {
  return useSetRecoilState(reset);
}

export default useMutateReset;
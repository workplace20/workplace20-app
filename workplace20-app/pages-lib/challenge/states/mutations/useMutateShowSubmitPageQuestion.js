import challengeQuestionsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';

const setShowSubmitPageQuestion = selector({
  key: "set_show_submit_page",
  set: ({set}) => {
    set(challengeQuestionsState, {
      showSubmitPage: true,
      currencyQuestionId: ''
    });
  }
});

const useMutateShowSubmitPageQuestion = () => {
  return useSetRecoilState(setShowSubmitPageQuestion);
}

export default useMutateShowSubmitPageQuestion;
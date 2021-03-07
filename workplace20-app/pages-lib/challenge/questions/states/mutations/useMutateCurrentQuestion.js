import challengeQuestionsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';

const setCurrentQuestion = selector({
  key: "set_current_question",
  set: ({set}, questionId) => {
    set(challengeQuestionsState, {
      currencyQuestionId: questionId,
      showSubmitPage: false
    });
  }
});

const useMutateCurrentQuestion = () => {
  return useSetRecoilState(setCurrentQuestion);
}

export default useMutateCurrentQuestion;
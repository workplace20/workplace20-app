import { atom } from 'recoil';

const challengeQuestionState = atom({
  key: "changlenge_questions_state",
  default: {
    currencyQuestionId: '',
    showSubmitPage: false
  }
});

export default challengeQuestionState;

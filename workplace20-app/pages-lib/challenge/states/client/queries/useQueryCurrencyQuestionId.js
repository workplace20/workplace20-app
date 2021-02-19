import challengeQuestionsState from '../states';
import { selector, useRecoilValue, atom } from 'recoil';

const getCurrencyQuestionId = selector({
  key: "currency_question_id",
  get: ({get}) => {
    const { currencyQuestionId } = get(challengeQuestionsState);

    return currencyQuestionId;
  }
});

const useQueryCurrencyQuestionId = () => {
  return useRecoilValue(getCurrencyQuestionId);
}

export default useQueryCurrencyQuestionId;
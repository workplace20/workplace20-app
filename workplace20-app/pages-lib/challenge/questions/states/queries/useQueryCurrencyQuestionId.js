import challengeQuestionsState from '../atoms';
import { selector, useRecoilValue, atom } from 'recoil';

const getCurrencyQuestionId = selector({
  key: "currency_question_id",
  get: ({get}) => {
    const { currencyQuestionId } = get(challengeQuestionsState);

    return currencyQuestionId;
  }
});

const useQueryCurrencyQuestionId = () => useRecoilValue(getCurrencyQuestionId);

export default useQueryCurrencyQuestionId;
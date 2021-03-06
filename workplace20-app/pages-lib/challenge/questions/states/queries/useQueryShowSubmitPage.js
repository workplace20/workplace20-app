import challengeQuestionsState from '../atoms';
import { selector, useRecoilValue } from 'recoil';

const getShowSubmitPage = selector({
  key: "show_submit_page",
  get: ({get}) => {
    const { showSubmitPage } = get(challengeQuestionsState);

    return showSubmitPage;
  }
});

const useQueryShowSubmitPage = () => {
  return useRecoilValue(getShowSubmitPage);
}

export default useQueryShowSubmitPage;
import profileJobsState from '../atoms';
import { selector, useRecoilValue, atom } from 'recoil';

const getJobDisplayComp = selector({
  key: "profile_jobs_get_job_display_comp",
  get: ({get}) => {
    const state = get(profileJobsState);

    return {
      displayComp: state.displayComp,
      ...state.payload[state.displayComp]
    }
  }
});

const useQueryJobDisplayComp = () => useRecoilValue(getJobDisplayComp);

export default useQueryJobDisplayComp;
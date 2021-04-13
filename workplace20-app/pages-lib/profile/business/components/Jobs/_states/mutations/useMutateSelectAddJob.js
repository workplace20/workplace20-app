import profileJobsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';
import { PROFILE_JOB_DISPLAY_COMP } from '../../_utils/constants';

const selectAddJob = selector({
  key: "profile_jobs_select_add_job",
  set: ({set}) => {
    set(profileJobsState, {
      displayComp: PROFILE_JOB_DISPLAY_COMP.ADD_JOB,
      payload: {
        [PROFILE_JOB_DISPLAY_COMP.ADD_JOB]: {}
      }
    });
  }
});

const useMutateSelectAddJob = () => {
  return useSetRecoilState(selectAddJob);
}

export default useMutateSelectAddJob;
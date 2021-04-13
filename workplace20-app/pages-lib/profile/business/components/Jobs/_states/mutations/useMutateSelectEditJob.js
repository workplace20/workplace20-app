import profileJobsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';
import { PROFILE_JOB_DISPLAY_COMP } from '../../_utils/constants';

const selectEditJob = selector({
  key: "profile_jobs_select_edit_job",
  set: ({set}, id) => {
    set(profileJobsState, {
      displayComp: PROFILE_JOB_DISPLAY_COMP.EDIT_JOB,
      payload: {
        [PROFILE_JOB_DISPLAY_COMP.EDIT_JOB]: {
          id: id
        }
      }
    });
  }
});

const useMutateSelectEditJob = () => {
  return useSetRecoilState(selectEditJob);
}

export default useMutateSelectEditJob;
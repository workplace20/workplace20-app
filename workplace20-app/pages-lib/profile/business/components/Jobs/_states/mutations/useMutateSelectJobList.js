import profileJobsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';
import { PROFILE_JOB_DISPLAY_COMP, JOB_TYPES } from '../../_utils/constants';

const selectJobList = selector({
  key: "profile_jobs_select_job_list",
  set: ({set}, jobType = JOB_TYPES.ACTIVE) => {
    set(profileJobsState, {
      displayComp: PROFILE_JOB_DISPLAY_COMP.JOB_LIST,
      payload: {
        [PROFILE_JOB_DISPLAY_COMP.JOB_LIST]: {
          jobType: jobType
        }
      }
    });
  }
});

const useMutateSelectJobList = () => {
  return useSetRecoilState(selectJobList);
}

export default useMutateSelectJobList;
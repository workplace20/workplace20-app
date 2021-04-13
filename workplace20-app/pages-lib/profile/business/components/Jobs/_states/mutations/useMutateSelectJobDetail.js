import profileJobsState from '../atoms';
import { selector, useSetRecoilState } from 'recoil';
import { PROFILE_JOB_DISPLAY_COMP } from '../../_utils/constants';

const selectJobDetail = selector({
  key: "profile_jobs_select_job_detail",
  set: ({set}, id) => {
    set(profileJobsState, {
      displayComp: PROFILE_JOB_DISPLAY_COMP.JOB_DETAIL,
      payload: {
        [PROFILE_JOB_DISPLAY_COMP.JOB_DETAIL]: {
          id: id
        }
      }
    });
  }
});

const useMutateSelectJobDetail = () => {
  return useSetRecoilState(selectJobDetail);
}

export default useMutateSelectJobDetail;
import { atom } from 'recoil';
import { PROFILE_JOB_DISPLAY_COMP, JOB_TYPES } from '../../_utils/constants';

const profileJobsState = atom({
  key: "profile_jobs_state",
  default: {
    displayComp: PROFILE_JOB_DISPLAY_COMP.JOB_LIST,
    payload: {
      [PROFILE_JOB_DISPLAY_COMP.JOB_LIST]: {
        jobType: JOB_TYPES.ACTIVE
      },
      [PROFILE_JOB_DISPLAY_COMP.JOB_DETAIL]: {
        id: ''
      },
      [PROFILE_JOB_DISPLAY_COMP.EDIT_JOB]: {
        id: ''
      }
    }
  }
});

export default profileJobsState;

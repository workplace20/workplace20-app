import { useQueryJobDisplayComp } from './_states';
import { PROFILE_JOB_DISPLAY_COMP } from './_utils/constants';

import {
  AddJob,
  EditJob,
  JobDetail,
  JobList
} from './components';

const Jobs = () => {
  const { displayComp, ...payload } = useQueryJobDisplayComp();

  const components = {
    [PROFILE_JOB_DISPLAY_COMP.JOB_LIST]: (<JobList {...payload} />),
    [PROFILE_JOB_DISPLAY_COMP.ADD_JOB]: (<AddJob />),
    [PROFILE_JOB_DISPLAY_COMP.EDIT_JOB]: (<EditJob {...payload} />),
    [PROFILE_JOB_DISPLAY_COMP.JOB_DETAIL]: (<JobDetail {...payload} />),
  };

  return components[displayComp];
}

export default Jobs;

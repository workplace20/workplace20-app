import { useReducer } from 'react';
import {
  JobList,
  JobInfo,
  Navigation,
  UnauthorizedWarningModal,
  ApplyJobConfirmModal,
  NotVerifiedWarningModal
} from './components';
import { useSession } from 'next-auth/client';
import { useQueryProfile } from 'pages-lib/_states';

const JobDetail = ({
  jobList,
  job,
  backUrl
}) => {
  const { id } = job;
  const [session] = useSession();
  const { data: profile } = useQueryProfile();
  const { verified } = profile || {};

  const [state, dispatch] = useReducer(reducer, {
    isWarningAuthorized: false,
    isConfirmApply: false,
    isWarningNotVerified: false
  });
  
  const { isWarningAuthorized, isConfirmApply, isWarningNotVerified } = state;

  const onApplyJob = () => {
    if (!session) {
      dispatch({ type: ActionTypes.warningUnAuthorized });
    } else if (!verified) {
      dispatch({ type: ActionTypes.warningNotVerified });
    } else {
      dispatch({ type: ActionTypes.confirmJobApply });
    }
  }

  const onCancel = () => dispatch({ type: ActionTypes.cancel });

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white">
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabIndex={0}>
              <Navigation url={backUrl} >
                JobList
            </Navigation>
              <JobInfo
                onApplyJob={onApplyJob}
               {...job} 
              />
            </main>
            <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r">
              <JobList
                jobList={jobList.map(item => ({
                  ...item,
                  selected: item.id.toString() === id.toString()
                }))}
              />
            </aside>
          </div>
        </div>
      </div>
      <UnauthorizedWarningModal
        open={isWarningAuthorized}
        onCancel={onCancel}
        {...job}
      />
      <NotVerifiedWarningModal
        open={isWarningNotVerified}
        onCancel={onCancel}
      />
      <ApplyJobConfirmModal 
        open={isConfirmApply}
        onCancel={onCancel}
        {...job}
      />
    </>
  )
}

const ActionTypes = {
  warningUnAuthorized: 'warningUnAuthorized',
  warningNotVerified: 'warningNotVerified',
  confirmJobApply: 'confirmJobApply',
  cancel: 'cancel'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.warningUnAuthorized:
      return {
        isWarningAuthorized: true,
        isConfirmApply: false,
        isWarningNotVerified: false
      };
    case ActionTypes.warningNotVerified:
      return {
        isWarningAuthorized: false,
        isConfirmApply: false,
        isWarningNotVerified: true
      };
    case ActionTypes.confirmJobApply:
      return {
        isWarningAuthorized: false,
        isConfirmApply: true,
        isWarningNotVerified: false
      };
    case ActionTypes.cancel:
      return {
        isWarningAuthorized: false,
        isConfirmApply: false,
        isWarningNotVerified: false
      };
    default:
      return state;
  }
}

export default JobDetail;
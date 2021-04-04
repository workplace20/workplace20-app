import { useMutateApplyJob } from 'pages-lib/jobs/_states';
import { ApplyError, ApplySuccess, ConfirmApply } from './components';

const ApplyJobConfirmModal = ({
  id,
  open,
  title,
  skills,
  onCancel
}) => {
  const { 
    mutate, 
    isLoading, 
    isError, 
    isSuccess, 
    error, 
    reset 
  } = useMutateApplyJob();

  const onClose = () => {
    reset();
    onCancel();
  }

  const onApplyJob = () => {
    mutate(id);
  }

  if (isSuccess) return (
    <ApplySuccess
      open={open}
      title={title}
      skills={skills}
      onClose={onClose}
    />
  );

  if (isError) return (
    <ApplyError
      open={open}
      error={error}
      title={title}
      isLoading={isLoading}
      skills={skills}
      onCancel={onClose}
      onApplyJob={onApplyJob}
    />
  );

  return (
    <ConfirmApply
      open={open}
      title={title}
      isLoading={isLoading}
      skills={skills}
      onCancel={onClose}
      onApplyJob={onApplyJob}
    />
  )
}

export default ApplyJobConfirmModal;

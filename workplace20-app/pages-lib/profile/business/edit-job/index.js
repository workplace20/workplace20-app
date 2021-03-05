import { withBusinessProfileLayout } from '../layouts';
import { JobForm } from 'pages-lib/profile/business/_components';
import { useQuerySkillList } from 'pages-lib/_states';
import { useQueryJobDetail } from '../_states';
import { useMutateEditJob } from '../_states';
import { Loading, Error } from './components';

const EditJob = ({
  id
}) => {
  const { data: job, isLoading: isLoadingJob, isError: isLoadingJobError } = useQueryJobDetail(id);
  const { data: allSkills = [], isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useQuerySkillList();
  const { mutate: onEditJob, isLoading, isError } = useMutateEditJob();

  if (isLoadingSkillList || isLoadingJob) return (<Loading />)
  if (isLoadingSkillListError || isLoadingJobError) return (<Error />)

  const {
    title,
    level,
    english,
    introduction,
    description,
    requiredSkills,
  } = job;

  return (
    <JobForm
      title='Edit Job'
      initialValues={{
        title,
        requiredSkills,
        level,
        english,
        introduction,
        description,
      }}
      availableSkills={allSkills}
      isSubmiting={isLoading}
      isSubmitError={isError}
      onSubmit={onEditJob}
    />
  )
}

export default withBusinessProfileLayout(EditJob);

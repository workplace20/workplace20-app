import JobForm from '../JobForm';
import { useQuerySkillList } from 'pages-lib/_states';
import { useQueryJobDetail, useMutateEditJob } from 'pages-lib/profile/business/components/Jobs/_states';
import { Loading, Error } from './components';
import { useMutateSelectJobList, useMutateSelectJobDetail } from 'pages-lib/profile/business/components/Jobs/_states';

const EditJob = ({
  id
}) => {
  const { data: job, isLoading: isLoadingJob, isError: isLoadingJobError } = useQueryJobDetail(id);
  const { data: allSkills = [], isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useQuerySkillList();
  const selectJobList = useMutateSelectJobList();
  const selectJobDetail = useMutateSelectJobDetail();
  const { mutate: onEditJob, isLoading, isError } = useMutateEditJob(selectJobList);

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
        id,
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
      onCancel={() => selectJobDetail(id)}
    />
  )
}

export default EditJob;

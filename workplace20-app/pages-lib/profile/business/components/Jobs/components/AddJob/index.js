import JobForm from '../JobForm';
import { useQuerySkillList } from 'pages-lib/_states';
import { useMutateAddJob } from 'pages-lib/profile/business/components/Jobs/_states';
import { Loading, Error } from './components';
import { useMutateSelectJobList, useMutateSelectJobDetail } from 'pages-lib/profile/business/components/Jobs/_states';

const CreateJobPage = () => {
  const { data: allSkills = [], isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useQuerySkillList();
  const selectJobList = useMutateSelectJobList();
  const { mutate: onAddJob, isLoading, isError } = useMutateAddJob(() => selectJobList());

  if (isLoadingSkillList) return (<Loading />)
  if (isLoadingSkillListError) return (<Error />)

  return (
    <JobForm 
      title='Add Job'
      initialValues={{
        title: '',
        requiredSkills: [],
        level: '',
        english: '',
        introduction: '',
        description: '#### Job Responsibilities\n * Responsibility 1\n * Responsibility 2\n * Responsibility 3\n #### Job Requirements* Requirement 1\n * Requirement 2\n * Requirement 3\n #### Additional Requirements\n * Additional Requirement 1\n * Additional Requirement 2\n * Additional Requirement 3\n',
      }}
      availableSkills={allSkills}
      isSubmiting={isLoading}
      isSubmitError={isError}
      onSubmit={onAddJob}
      onCancel={() => selectJobList()}
    />
  )
}

export default CreateJobPage;
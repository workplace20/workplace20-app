import { JobForm } from 'pages-lib/profile/business/_components';
import { useQuerySkillList } from 'pages-lib/_states';
import { withBusinessProfileLayout } from '../layouts';
import { useMutateAddJob } from '../_states';
import { Loading, Error } from './components';

const CreateJobPage = () => {
  const { data: allSkills = [], isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useQuerySkillList();
  const { mutate: onAddJob, isLoading, isError } = useMutateAddJob();

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
    />
  )
}

export default withBusinessProfileLayout(CreateJobPage);
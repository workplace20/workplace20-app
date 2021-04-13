import {
  JobFilter,
  JobList
} from './components';
import { useMutateSelectAddJob } from 'pages-lib/profile/business/components/Jobs/_states';
import { H2 } from 'pages-lib/_components/typography'
import { Button } from 'pages-lib/_components/controls';

const Jobs = ({
  jobType
}) => {
  const selectAddJob = useMutateSelectAddJob();

  return (
    <div className="mt-2">
      <div className="mb-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <H2> Jobs </H2>
        <Button
          onClick={() => selectAddJob()}
        >
          Add Job
      </Button>
      </div>
      <div className="w-full">
        <JobFilter jobType={jobType} />
      </div>
      <div className="space-y-6 lg:px-0 lg:col-span-9 mt-6">
        <JobList jobType={jobType} />
      </div>
    </div>
  )
}

export default Jobs;
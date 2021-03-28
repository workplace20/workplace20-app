import { withMarketingLayout } from 'pages-lib/_layouts';
import { JobList } from './_components';

const JobListPage = () => {
  return (
    <div className="my-8 px-6">
      <JobList 
      />
    </div>
  )
}

export default withMarketingLayout(JobListPage, "gray");
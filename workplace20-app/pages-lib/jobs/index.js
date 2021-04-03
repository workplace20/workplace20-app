import { withMarketingLayout } from 'pages-lib/_layouts';
import { JobList } from './_components';

const JobListPage = ({
  jobs
}) => {
  return (
    <div className="my-8 px-6">
      <JobList
        jobs={jobs.map(item => ({
          ...item,
          url: `/jobs/${item.slug}`,
        }))}
      />
    </div>
  )
}

export default withMarketingLayout(JobListPage, "gray");
import { withMarketingLayout } from 'pages-lib/_layouts';
import { JobDetail } from '../_components';
import { useRouter } from 'next/router';
import LoadingPage from 'pages-lib/loading';

const JobDetailPage = ({
  jobList,
  job
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return (<LoadingPage />)
  }

  return (
    <div className="lg:px-6 border-gray-200 border-t">
      <JobDetail 
        jobList={jobList.map(item => ({
          ...item,
          url: `/jobs/${item.slug}`
        }))}
        job={job}
        backUrl='/jobs'
      />
    </div>
  )
}

export default withMarketingLayout(JobDetailPage, "gray");
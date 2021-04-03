import { withAppLayout } from 'pages-lib/_layouts';
import { JobDetail } from '../../_components';
import Card from 'pages-lib/_components/card';
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
    <Card>
      <JobDetail 
        jobList={jobList.map(item => ({
          ...item,
          url: `/jobs/me/${item.slug}`
        }))}
        job={job}
        backUrl='/jobs/me'
      />
    </Card>
  )
}

export default withAppLayout(JobDetailPage, "gray");
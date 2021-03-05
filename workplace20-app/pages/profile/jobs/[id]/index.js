import { useRouter } from 'next/router';
import JobDetail from 'pages-lib/profile/business/job-detail';

const JobDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <JobDetail id={id} />
  )
}

export default JobDetailPage;
import { useRouter } from 'next/router';
import NewJob from './new-job';
import AppliedJob from './applied-job';

const JobDetail = () => {
  const router = useRouter()
  const { id } = router.query;

  if (id === 'applied-job') {
    return <AppliedJob />
  }

  return <NewJob />
}

export default JobDetail;
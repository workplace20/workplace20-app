import { useRouter } from 'next/router';
import EditJob from 'pages-lib/profile/business/edit-job';

const EditJobPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <EditJob id={id} />
  )
}

export default EditJobPage;
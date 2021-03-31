import { withAppLayout } from 'pages-lib/_layouts';
import { JobDetail } from '../../_components';
import Card from 'pages-lib/_components/card';

// static UI
// TODO: implement logic
const JobDetailPage = () => {
  return (
    <Card>
      <JobDetail />
    </Card>
  )
}

export default withAppLayout(JobDetailPage, "gray");
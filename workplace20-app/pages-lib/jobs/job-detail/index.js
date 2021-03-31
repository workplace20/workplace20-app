import { withMarketingLayout } from 'pages-lib/_layouts';
import { JobDetail } from '../_components';

// static UI
// TODO: implement logic
const JobDetailPage = () => {
  return (
    <div className="lg:px-6 border-gray-200 border-t">
      <JobDetail />
    </div>
     
  )
}

export default withMarketingLayout(JobDetailPage, "gray");
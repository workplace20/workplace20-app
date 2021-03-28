import { withAppLayout } from 'pages-lib/_layouts';
import { JobList } from '../_components';
import Card from 'pages-lib/_components/card';

const JobListPage = () => {
  return (
    <Card>
      <Card.Content>
        <JobList 
          cardType="box"
        />
      </Card.Content>
    </Card>
  )
}

export default withAppLayout(JobListPage);
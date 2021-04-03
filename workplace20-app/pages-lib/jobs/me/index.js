import { withAppLayout } from 'pages-lib/_layouts';
import { JobList } from '../_components';
import Card from 'pages-lib/_components/card';

const JobListPage = ({
  jobs
}) => {
  return (
    <Card>
      <Card.Content>
        <JobList
          jobs={jobs.map(item => ({
            ...item,
            url: `/jobs/me/${item.slug}`,
          }))}
          cardType="box"
        />
      </Card.Content>
    </Card>
  )
}

export default withAppLayout(JobListPage);
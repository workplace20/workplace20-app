import { withAppLayout } from 'pages-lib/_layouts';
import { JobList } from '../_components';
import Card from 'pages-lib/_components/card';

// static UI
// TODO: implement logic

const JobListPage = () => {
  const jobs = Array(9)
    .fill(0)
    .map((_, i) => ({
      id: i,
      title: 'Front-end Developer',
      companyName: 'The Boring Company',
      level: 'Level',
      english: 'Advance',
      introduction: 'libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi',
      skills: ["react", "csharp"],
      url: `/jobs/me/${i}`
    }));

  return (
    <Card>
      <Card.Content>
        <JobList
          jobs={jobs}
          cardType="box"
        />
      </Card.Content>
    </Card>
  )
}

export default withAppLayout(JobListPage);
// TODO: query from database for job list and job detail
export async function getStaticProps({
  params
}) {
  const { slug } = params;

  const jobList = Array(19)
    .fill(0)
    .map((_, i) => ({
      id: i,
      logoUrl: '',
      title: `Front-end Developer ${i}`,
      companyName: 'The Boring Company',
      level: 'Level',
      english: 'Advance',
      introduction: 'libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi',
      skills: ["react", "csharp"],
      slug: i.toString()
    }));

  const job = {
    id: slug,
    title: `Front-end Developer ${slug}`,
    description: '#### Job Responsibilities\n  * Responsibility 1\n  * Responsibility 2\n  * Responsibility 3\n  #### Job Requirements* Requirement 1\n  * Requirement 2\n  * Requirement 3\n  #### Additional Requirements\n * Additional Requirement 1\n  * Additional Requirement 2\n  * Additional Requirement 3',
    level: 'Level',
    english: 'Advance',
    introduction: 'libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi',
    skills: ["react", "csharp"],
    developmentCulture: '#### Libero Nunc Consequat \n  * Sit amet mattis vulputate enim 1\n  * Semper viverra nam libero\n  * Nam libero justo\n',
    company: {
      companyName: 'The Boring Company',
      logoUrl: '',
      country: 'US',
      email: 'theboringcompany@nomail.com',
      phoneNumber: '088 888 8888',
      yearFounded: '1993',
      companySize: '10 - 20',
      companyType: 'Partnership',
      website: 'https://theboringcompany.com',
      about: 'libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi'
    }
  }
  
  return {
    props: {
      jobList,
      job,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: Array(19)
    .fill(0)
    .map((_, i) => ( { params: { slug: i.toString() } })),
    fallback: true
  };
}

export { default } from 'pages-lib/jobs/me/job-detail';

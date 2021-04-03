// TODO: query from database for job list
export async function getStaticProps() {
  const jobs = Array(9)
  .fill(0)
  .map((_, i) => ({
    id: i,
    logoUrl: '',
    title: 'Front-end Developer',
    companyName: 'The Boring Company',
    level: 'Level',
    english: 'Advance',
    introduction: 'libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi',
    skills: ["react", "csharp"],
    slug: i.toString(),
  }));
  
  return {
    props: {
      jobs,
    },
    revalidate: 1,
  }
}

export { default } from 'pages-lib/jobs/me';

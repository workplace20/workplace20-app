import { JobList, JobInfo, Navigation } from './components';

const JobDetail = ({
  jobList,
  job,
  backUrl
}) => {
  const { id } = job;

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabIndex={0}>
            <Navigation url={backUrl} >
              JobList
            </Navigation>
            <JobInfo {...job}/>
          </main>
          <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r">
            <JobList
              jobList={jobList.map(item => ({
                ...item,
                selected: item.id.toString() === id.toString()
              }))}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default JobDetail;
import { Button } from 'pages-lib/_components/controls';
import { JobSkillList } from 'pages-lib/jobs/_components';
import { Image } from 'pages-lib/_components/controls';

const JobHeader = ({
  logoUrl,
  title,
  skills,
  onApplyJob
}) => (
    <>
      <div className="sm:flex sm:items-end sm:space-x-5 sm:mt-2">
        <div className="flex">
          <Image url={logoUrl} />
        </div>
        <div className="sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div className="sm:hidden 2xl:block min-w-0 flex-1">
            <JobTitle
              title={title}
              skills={skills}
            />
          </div>
          <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button onClick={onApplyJob}>
              <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
              </svg>
              <span>Apply Now</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block 2xl:hidden mt-4 min-w-0 flex-1">
        <JobTitle
          title={title}
          skills={skills}
        />
      </div>
    </>
  )

const JobTitle = ({
  title,
  skills
}) => (
    <>
      <h1 className="text-2xl font-bold text-gray-900 truncate">
        {title}
      </h1>
      <div className="space-x-1 pt-2">
        <JobSkillList
          skills={skills}
        />
      </div>
    </>
  )

export default JobHeader;
import { Button, TextField, Chip } from 'pages-lib/_components/controls';
import ReactMarkdown from 'react-markdown';
import useGetSkillName from 'pages-lib/_hooks/useGetSkillName';

const JobDetail = () => {
  const { getSkillName, isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useGetSkillName();

  const jobDescription = " #### Job Responsibilities\n  * Responsibility 1\n  * Responsibility 2\n  * Responsibility 3\n  #### Job Requirements* Requirement 1\n  * Requirement 2\n  * Requirement 3\n  #### Additional Requirements\n * Additional Requirement 1\n  * Additional Requirement 2\n  * Additional Requirement 3"

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabIndex={0}>
            {/* Breadcrumb */}
            <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
              <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                {/* Heroicon name: solid/chevron-left */}
                <svg className="-ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Job Detail</span>
              </a>
            </nav>
            <article>
              {/* Profile header */}
              <div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-20 w-20 rounded-md bg-gray-500">
                        </span>
                      </div>
                      {/* <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt /> */}
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                          Front-end Developer
                        </h1>
                        <div className="space-x-1 pt-2">
                          {
                            ["react", "csharp"].map(skill => (
                              <Chip
                                color="secondary"
                                value={getSkillName(skill)}
                              />
                            ))
                          }
                        </div>
                      </div>
                      <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button color="secondary">
                          <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                          </svg>
                          <span>Apply Now</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                      Ricardo Cooper
                </h1>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {/* Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                      <a href="#" className="border-orange-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                        Job detail
                  </a>
                      <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                        Development culture
                  </a>
                      <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                        About the company
                  </a>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Description list */}
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <TextField
                      label="Level"
                      value="Expert"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <TextField
                      label="English"
                      value="Advance"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextField
                      label="Introduction"
                      value="libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextField>
                      <TextField.Content>
                        <ReactMarkdown>
                          {
                            jobDescription
                          }

                        </ReactMarkdown>
                      </TextField.Content>
                    </TextField>
                  </div>
                </dl>
              </div>

            </article>
          </main>
          <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-lg font-medium text-gray-900">Jobs</h2>
            </div>
            <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
              <div className="relative">
                <ul className="relative z-0 divide-y divide-gray-200 border-t border-b border-gray-200">
                  <li>
                    <div className="bg-gray-100 relative px-6 py-5 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                      <div className="flex-shrink-0">
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-gray-500">
                          </span>
                        </div>
                        {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=I7BYiimonz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt /> */}
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="#" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="text-sm font-medium text-gray-900">
                            Front-end Developer
                      </p>
                          <p className="text-sm text-gray-500 truncate">
                            The Boring Company
                      </p>
                        </a>
                      </div>
                    </div>
                  </li>
                  {
                    Array(20)
                      .fill(0)
                      .map((_, i) => (
                        <li>
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                            <div className="flex-shrink-0">
                              <div className="flex-shrink-0">
                                <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-gray-500">
                                </span>
                              </div>
                              {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=I7BYiimonz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt /> */}
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="#" className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">
                                  Front-end Developer
                      </p>
                                <p className="text-sm text-gray-500 truncate">
                                  The Boring Company
                      </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      ))
                  }
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default JobDetail;
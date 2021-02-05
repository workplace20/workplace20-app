const JobDetail = () => (
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside className="lg:col-span-3">
      <div className="bg-white shadow sm:rounded-lg py-4 px-2 sm:p-4 py-6 px-2 sm:px-6">
        <nav className="space-y-1">
          {/* Current: "bg-gray-50 text-orange-600 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" */}
          <a href="#" className="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
            {/* Heroicon name: outline/bell */}
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="truncate">
              New
            </span>
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            {/* Heroicon name: outline/user-circle */}
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="truncate">
              Matched
            </span>
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            {/* Heroicon name: outline/key */}
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
            <span className="truncate">
              Offered
            </span>
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            {/* Current: "text-orange-500", Default: "text-gray-400 group-hover:text-gray-500" */}
            {/* Heroicon name: outline/credit-card */}
            <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
            <span className="truncate">
              Applied
            </span>
          </a>
        </nav>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5">
          <form>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid gap-y-6 gap-x-4">
                  <div className="sm:col-span-6">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Search Text
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Level
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm">
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Expert</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Skills
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                <button type="submit" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Search
                    <svg class="ml-2 -mr-0.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </aside>


    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
              Full-stack developer
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Level
            </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Expert
            </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  English
          </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Advance
            </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Introduction
            </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Job Responsibilities
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <div className="prose max-w-none">
                    <ul>
                      <li>
                        Tempor ultrices proin nunc fames nunc ut auctor vitae sed.
    </li>
                      <li>
                        Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.
    </li>
                      <li>
                        Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed.
    </li>
                    </ul>
                  </div>


                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Job Requirements
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <div className="prose max-w-none">
                    <ul>
                      <li>
                        Tempor ultrices proin nunc fames nunc ut auctor vitae sed.
    </li>
                      <li>
                        Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.
    </li>
                      <li>
                        Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed.
    </li>
                    </ul>
                  </div>


                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Additional Requirements
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <div className="prose max-w-none">
                    <ul>
                      <li>
                        Tempor ultrices proin nunc fames nunc ut auctor vitae sed.
    </li>
                      <li>
                        Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.
    </li>
                    </ul>
                  </div>


                </dd>
              </div>
            </dl>
          </div>

          <div className="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg flex justify-between">
          <button type="submit" className="inline-flex items-center px-3 py-2 border border-orange-300 shadow-sm text-sm leading-4 font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
            Back
          </button>
          <button type="submit" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
</svg>
            Apply
          </button>
            {/* <a href="#" >Read full application</a> */}
          </div>
        </div>
      </section>

    </div>
  </div>

)

export default JobDetail;
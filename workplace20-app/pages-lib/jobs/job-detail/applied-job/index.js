const JobDetail = () => (
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside className="lg:col-span-3">
      <div className="bg-white shadow sm:rounded-lg py-4 px-2 sm:p-4 py-6 px-2 sm:px-6">
        <nav className="space-y-1">
          <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            {/* Heroicon name: outline/user-circle */}
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="truncate">
              New
            </span>
          </a>

          <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            {/* Heroicon name: outline/key */}
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
            <span className="truncate">
              Matched
            </span>
          </a>

          <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            {/* Current: "text-orange-500", Default: "text-gray-400 group-hover:text-gray-500" */}
            {/* Heroicon name: outline/credit-card */}
            <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
            <span className="truncate">
              Offered
            </span>
          </a>
          <a href="#" className="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
            {/* Heroicon name: outline/bell */}
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
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
          <div className="py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
              <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">

                <div className="md:space-x-4 xl:border-b xl:pb-6">
                  <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                    Mobile developer
            </h2>
                </div>
                <div className="border-t border-gray-200 py-3 xl:pt-6 xl:pb-0">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Level
            </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        Senior
            </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        English
          </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        Basic
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
                <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
                  <div>
                    <div className="divide-y divide-gray-200">
                      <div className="pb-4">
                        <h2 id="activity-title" className="text-lg font-medium text-gray-900">Comments</h2>
                      </div>
                      <div className="pt-6">
                        <ul className="space-y-8">
                          <li>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                              </div>
                              <div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-gray-900">Leslie Alexander</a>
                                </div>
                                <div className="mt-1 text-sm text-gray-700">
                                  <p>Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.</p>
                                </div>
                                <div className="mt-2 text-sm space-x-2">
                                  <span className="text-gray-500 font-medium">4d ago</span>
                                  <span className="text-gray-500 font-medium">·</span>
                                  <button type="button" className="text-gray-900 font-medium">Reply</button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                              </div>
                              <div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-gray-900">Michael Foster</a>
                                </div>
                                <div className="mt-1 text-sm text-gray-700">
                                  <p>Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.</p>
                                </div>
                                <div className="mt-2 text-sm space-x-2">
                                  <span className="text-gray-500 font-medium">4d ago</span>
                                  <span className="text-gray-500 font-medium">·</span>
                                  <button type="button" className="text-gray-900 font-medium">Reply</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <img className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt />
                              <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                {/* Heroicon name: solid/chat-alt */}
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <form action="#">
                              <div>
                                <label htmlFor="comment" className="sr-only">Comment</label>
                                <textarea id="comment" name="comment" rows={3} className="shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md" placeholder="Leave a comment" defaultValue={""} />
                              </div>
                              <div className="mt-6 flex items-center justify-end space-x-4">
                                <button type="submit" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                  Comment
                              </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="hidden xl:block xl:pl-8">
                <h2 className="sr-only">Details</h2>
                <div className="space-y-5">
                  <div className="flex items-center space-x-2">
                    {/* Heroicon name: solid/chat-alt */}
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 text-sm font-medium">2 comments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Heroicon name: solid/calendar */}
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 text-sm font-medium">Created on <time dateTime="2020-12-02">Dec 2, 2020</time></span>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                  <div className="flow-root">
                    <ul className="-mb-8">
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                {/* Heroicon name: solid/user */}
                                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">Applied to <a href="#" className="font-medium text-gray-900">Mobile Developer</a></p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime="2020-09-20">Sep 20</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                {/* Heroicon name: solid/thumb-up */}
                                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">Your profile is being reviewed</p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime="2020-09-22">Sep 22</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="relative pb-8">
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                {/* Heroicon name: solid/check */}
                                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">Your application is approved</p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime="2020-10-04">Oct 4</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <div>
                    <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                    <ul className="mt-3 space-y-3">
                      <li className="flex justify-start">
                        <a href="#" className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt />
                          </div>
                          <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                    <ul className="mt-2 leading-8">
                      <li className="inline">
                        <a href="#" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                          </div>
                          <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="#" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                          </div>
                          <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>


    </div>
  </div>

)

export default JobDetail;
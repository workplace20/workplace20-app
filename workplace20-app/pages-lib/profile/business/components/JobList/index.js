const JobList = () => {
  return (
    <>
      <div className="w-full">
        <div className="sm:hidden">
          <label htmlFor="question-tabs" className="sr-only">Select a tab</label>
          <select id="question-tabs" className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            <option value="#/recent">Active</option>
            <option value="#/most-liked">Review</option>
            <option value="#/most-answers">Deactive</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
            <a href="#" aria-current="page" className="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>Active</span>
              <span aria-hidden="true" className="bg-orange-500 absolute inset-x-0 bottom-0 h-0.5" />
            </a>
            <a href="#" aria-current="false" className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>Review</span>
              <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5" />
            </a>
            <a href="#" aria-current="false" className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>Deactive</span>
              <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5" />
            </a>
          </nav>
        </div>
      </div>
      <div className="space-y-6 lg:px-0 lg:col-span-9 mt-6">
        <section aria-labelledby="applicant-information-title">
          <div className="rounded-lg bg-white overflow-hidden shadow">
            <div className="px-4 py-5 sm:px-6 group">
              <a className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500">
                Full-stack developer
              </a>
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
              </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:rounded-b-lg">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
                ReactJS
            </span>
              <span class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
                d3JS
            </span>
              <span class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
                Java
            </span>
            </div>
          </div>
        </section>
        <section aria-labelledby="applicant-information-title">
          <div className="rounded-lg bg-white overflow-hidden shadow">
            <div className="px-4 py-5 sm:px-6">
              <a className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500">
                Mobile developer
            </a>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
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
              </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:rounded-b-lg">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
                Xamarin
            </span>
              <span class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
                C#
            </span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default JobList;
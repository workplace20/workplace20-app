import { withMarketingLayout } from 'pages-lib/_layouts';
import Link from 'next/link';
import { SelectChip } from 'pages-lib/_components/controls';

const Jobs = () => (
  <div className="grid grid-cols-1 gap-4 items-start lg:gap-8 lg:grid lg:grid-cols-12">
    <aside className="lg:col-span-3">
      <nav aria-label="Sidebar" className="sticky top-4">
        {/* <div className="pb-12 space-y-1">
          <a href="#" className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
            <svg className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">
              All
             </span>
          </a>
          <a href="#" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="truncate">
              Matched
            </span>
          </a>
          <div className="relative pt-8">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div> */}
        <div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              {/* Heroicon name: solid/search */}
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="Search" type="search" />
          </div>
          <div className="mt-4">
            <SelectChip
              options={[
                {
                  label: 'C#',
                  value: 'c#'
                },
                {
                  label: 'ReactJs',
                  value: 'reactjs'
                },
                {
                  label: 'HTML',
                  value: 'html'
                }
              ]}
              value={[]}
              multipleSelect={true}
              onChange={() => { }}
            />
          </div>
        </div>
      </nav>

    </aside>

    <div className="space-y-6 lg:px-0 lg:col-span-9">
      {/* Payment details */}
      <section aria-labelledby="applicant-information-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="px-4 py-5 sm:px-6 group">
            <Link href='/jobs/new-job'>
              <a className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500">
                Full-stack developer
              </a>
            </Link>
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
            <Link href='/jobs/applied-job'>

              <a className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500">
                Mobile developer
            </a>
            </Link>
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
      <section aria-labelledby="applicant-information-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="px-4 py-5 sm:px-6">
            <Link href='/jobs/new-job'>
              <a className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500">
                Front-end developer
            </a>
            </Link>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Level
            </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Junior
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
              Javascript
            </span>
            <span class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
              Functional Programing
            </span>
            <span class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
              AngularJS
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>

)

export default withMarketingLayout(Jobs, "gray");
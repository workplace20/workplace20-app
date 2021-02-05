const NetWork = () => (
  <section aria-labelledby="applicant-information-title">
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="px-4 py-5 sm:px-6">
        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
          General Information
        </h2>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Name
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              Le Quang Tan Loi
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Email address
          </dt>
            <dd className="mt-1 text-sm text-gray-900">
              tanloiit2010@gmail.com
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Birthday
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              June 8, 1990
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Phone Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              +84 666666666
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Experience
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              5 years
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Location
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              Ho Chi Minh city
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">
              About
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
)

export default NetWork;
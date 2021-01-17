export default () => (
  <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
    {/* Left column */}
    <div className="grid grid-cols-1 gap-4 lg:col-span-3">
      {/* Welcome panel */}
      <section aria-labelledby="profile-overview-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
          <div className="bg-white p-6">
            <div>
              <div>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl w-full mb-2">Employment History</p>
                <p className="text-md font-medium text-gray-600 mb-36">Comming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Actions panel */}

    </div>
  </div>
)
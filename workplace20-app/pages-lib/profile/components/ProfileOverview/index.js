import { useSession } from 'next-auth/client';

const ProfileOverview = () => {
  const [session] = useSession();
  const { user } = session;

  return (
    <section aria-labelledby="profile-overview-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <img className="mx-auto h-20 w-20 rounded-full" src={user.image} alt="avatar" />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                <p className="text-sm font-medium text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <a href="#" className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Get Mached Jobs
                    </a>
            </div>
          </div>
        </div>
        <nav aria-label="Progress">
          <ol className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-4 sm:divide-y-0">
            <li className="relative md:flex-1 md:flex">
              {/* Completed Step */}
              <a href="#" className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full group-hover:bg-orange-600">
                    {/* Heroicon name: solid/check */}
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">Welcome to Workplace 20</span>
                </span>
              </a>
              <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                </svg>
              </div>
            </li>
            <li className="relative md:flex-1 md:flex">
              {/* Current Step */}
              <a href="#" className="px-6 py-4 flex items-center text-sm font-medium">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full" aria-current="step">
                  <span className="text-orange-500">02</span>
                </span>
                <span className="ml-4 text-sm font-medium text-orange-600">Tell us about yourself</span>
              </a>
              <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                </svg>
              </div>
            </li>
            <li className="relative md:flex-1 md:flex">
              {/* Upcoming Step */}
              <a href="#" className="group flex items-center">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">03</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Pass your 1st skill</span>
                </span>
              </a>
              <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                </svg>
              </div>
            </li>
            <li className="relative md:flex-1 md:flex">
              {/* Upcoming Step */}
              <a href="#" className="group flex items-center">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">04</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Review</span>
                </span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default ProfileOverview;
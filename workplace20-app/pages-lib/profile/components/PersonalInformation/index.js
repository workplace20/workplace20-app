import { useQueryProfile } from 'pages-lib/_states';
import { 
  UpdateForm,
  PersonalInformationView,
  Loading,
} from './components';
import { Transition } from '@headlessui/react';
import { useState } from "react";

const PersonalInformation = () => {
  const { data: profile, isLoading, isError } = useQueryProfile();

  const [isUpdating, setIsUpdating] = useState(false);

  const handleStartUpdate = () => setIsUpdating(true);
  const handleCancelUpdate = () => setIsUpdating(false);

  return (
    <section aria-labelledby="applicant-information-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <h3 className="py-2 text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <Transition
            show={!isUpdating && !isLoading}
            enter="transition duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <button ref={ref} onClick={handleStartUpdate} type="button" className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
                Update
              </button>
            )}
          </Transition>
        </div>

        <Transition
          show={isError}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref} className="text-center border-t border-gray-200 px-4 py-5 sm:px-6">
              <p class="text-sm text-red-600 my-2" id="email-error">Something went wrong on loading profile</p>
            </div>
          )}
        </Transition>

        <Transition
          show={isLoading}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref}>
              <Loading />
            </div>
          )}
        </Transition>

        <Transition
          show={!isUpdating && !isLoading && !isError}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref}>
              <PersonalInformationView
                profile={profile}
              />
            </div>
          )}
        </Transition>

        <Transition
          show={isUpdating && !isLoading && !isError}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref}>
              <UpdateForm
                profile={profile}
                onCancelUpdate={handleCancelUpdate}
              />
            </div>
          )}
        </Transition>
      </div>
    </section >
  )
}

export default PersonalInformation;
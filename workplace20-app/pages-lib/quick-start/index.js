import classnames from 'classnames';
import { PROFILE_KIND } from 'pages-lib/_utils/constants';
import { withEmptyLayout } from 'pages-lib/_layouts';
import { useState } from 'react';
import Redirect from 'pages-lib/_components/Redirect';
import LoadingPage from 'pages-lib/loading';
import { useRouter } from 'next/router';
import { useQueryProfileKind, useMutateProfileKind } from 'pages-lib/_states';

const QuickStart = () => {
  const [profileKind, setProfileKind] = useState('');

  const router = useRouter();
  const { data: userProfileKind, isLoading: loadingQueryProfile } = useQueryProfileKind();
  const { mutate, isLoading, isError } = useMutateProfileKind(() => router.push('/challenges/general'));

  if (loadingQueryProfile) {
    return (<LoadingPage />)
  }

  if (userProfileKind) {
    return (<Redirect to="/challenges/general/overview" />);
  }

  const handleUserKindSelect = (userKind) => () => {
    setProfileKind(userKind);
    mutate(userKind);
  }

  return (
    <div className="lg:h-screen w-full flex justify-center lg:items-center">
      <div className="max-w-4xl px-6 pt-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold orange-700 text-gray-900 sm:text-center">To start, who are you?</h1>
        </div>
        <p className="mt-10 text-3xl text-gray-500 sm:text-center">I am a ...</p>
        {
          isError && (
            <div class="rounded-md bg-red-50 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    Something went wrong while saving your selection.
                  </p>
                </div>
              </div>
            </div>
          )
        }
        <div className="group my-6 space-y-4 sm:my-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-2xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          {
            isLoading && (<LoadingPage />)
          }
          <div
            className={classnames(
              'border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 cursor-pointer',
              {
                'bg-orange-200': profileKind === PROFILE_KIND.creator,
                'hover:bg-orange-100 hover:shadow-lg hover:border-transparent': profileKind !== PROFILE_KIND.creator,
              }
            )}
            onClick={handleUserKindSelect(PROFILE_KIND.creator)}
          >
            <div className="p-6">
              <dt className="text-3xl leading-6 font-bold text-gray-900">Creator</dt>
              <dd className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper. Amet cursus sit amet dictum sit amet justo donec.</dd>
            </div>
          </div>
          <div
            className={classnames(
              'border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 cursor-pointer',
              {
                'bg-orange-200': profileKind === PROFILE_KIND.business,
                'hover:bg-orange-100 hover:shadow-lg hover:border-transparent': profileKind !== PROFILE_KIND.business,
              }
            )}
            onClick={handleUserKindSelect(PROFILE_KIND.business)}
          >
            <div className="p-6">
              <dt className="text-3xl leading-6 font-bold text-gray-900">Business</dt>
              <dd className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit. Sit amet mauris commodo quis imperdiet massa tincidunt nunc.</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withEmptyLayout(QuickStart);
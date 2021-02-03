import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import Redirect from 'components/Redirect';
import { updateProfile } from 'pages-lib/_states/profile/actions';
import ProfileRequest from 'pages-lib/_api-request/profiles';
import ProfileState from 'pages-lib/_states/profile';

const Onboarding = () => {
  const router = useRouter();
  const handleUpdateProfile = useSetRecoilState(updateProfile);
  const profile = useRecoilValue(ProfileState);
  if (profile.kind) return (<Redirect to="/challenge" />);

  const handleUserKindSelect = (userKind) => async () => {
    const res = await ProfileRequest.updateProfile({ kind: userKind });

    handleUpdateProfile(res);

    router.push('/challenge');
  }

  return (
    <div className="bg-white h-screen w-screen flex justify-center lg:items-center">
      <div className="max-w-4xl px-6 pt-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold orange-700 text-gray-900 sm:text-center">To start, who are you?</h1>
        </div>
        <p className="mt-10 text-3xl text-gray-500 sm:text-center">I am a ...</p>
        <div className="group mt-6 space-y-4 sm:mt-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-2xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          <div
            className='hover:bg-orange-100 hover:shadow-lg hover:border-transparent border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 cursor-pointer'
            onClick={handleUserKindSelect('creator')}
          >
            <div className="p-6">
              <h2 className="text-3xl leading-6 font-bold text-gray-900">Creator</h2>
              <p className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper. Amet cursus sit amet dictum sit amet justo donec.</p>
            </div>
          </div>
          <div
            className='hover:bg-orange-100 hover:shadow-lg hover:border-transparent border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 cursor-pointer'
            onClick={handleUserKindSelect('business')}
          >
            <div className="p-6">
              <h2 className="text-3xl leading-6 font-bold text-gray-900">Business</h2>
              <p className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit. Sit amet mauris commodo quis imperdiet massa tincidunt nunc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding;
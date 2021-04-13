import {
  ProfileOverview,
  Jobs,
  BusinessInformation
} from './components';

const BusinessProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-5 lg:gap-8">
      <div className="grid grid-cols-1 gap-4 lg:col-span-3">
        <ProfileOverview />
        <div className="block lg:hidden">
          <BusinessInformation />
        </div>
        <Jobs />
      </div>
      <div className=" grid-cols-1 gap-4 lg:col-span-2 hidden lg:grid">
        <BusinessInformation />
      </div>
    </div>
  )
}

export default BusinessProfile;
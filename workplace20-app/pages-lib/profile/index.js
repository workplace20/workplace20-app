import ProfileOverview from './components/ProfileOverview';
import NetWork from './components/Network';
import PotentialJobList from './components/PotentialJobList';
import NewList from './components/NewList';
import withAuthSecure from 'components/withAuthSecure';

const Profile = () => (
  <>
    <h1 className="sr-only">Profile</h1>
    {/* Main 3 column grid */}
    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      {/* Left column */}
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        {/* Welcome panel */}
        <ProfileOverview />
        {/* Actions panel */}
        <NetWork />
      </div>
      {/* Right column */}
      <div className="grid grid-cols-1 gap-4">
         {/* Recent Hires */}
         <PotentialJobList />
        {/* Announcements */}
        {/* <NewList /> */}
       
      </div>
    </div>
  </>
)

export default withAuthSecure(Profile);
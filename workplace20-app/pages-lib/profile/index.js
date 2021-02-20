import { withAppLayout } from 'pages-lib/_layouts';
import ProfileOverview from './components/ProfileOverview';
import NetWork from './components/Network';
import PotentialJobList from './components/PotentialJobList';

const Profile = () => (
  <>
    <h1 className="sr-only">Profile</h1>
    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <ProfileOverview />
        <NetWork />
      </div>
      <div className="grid grid-cols-1 gap-4">
         <PotentialJobList />
      </div>
    </div>
  </>
)

export default withAppLayout(Profile);
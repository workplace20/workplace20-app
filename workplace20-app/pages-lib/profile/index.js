import { withAppLayout } from 'pages-lib/_layouts';
import { useSession } from 'next-auth/client';
import ProfileOverview from './components/ProfileOverview';
import NetWork from './components/Network';
import PotentialJobList from './components/PotentialJobList';
import { useQueryProfile } from 'pages-lib/_states';

const Profile = () => {
  const [session] = useSession();
  const { user } = session;
  const { data: profile } = useQueryProfile();

  const { name, email, image } = user;
  const { verified, generalChallengeCompleted, skills, rate, status } = profile;

  return (
    <>
      <h1 className="sr-only">Profile</h1>
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <ProfileOverview 
            name={name}
            email={email}
            image={image}
            verified={verified}
            generalChallengeCompleted={generalChallengeCompleted}
            firstSkillCompleted={skills?.length > 0}
            rate={rate}
            status={status}
          />
          <NetWork />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <PotentialJobList />
        </div>
      </div>
    </>
  )
}

export default withAppLayout(Profile);
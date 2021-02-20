import { useSession } from 'next-auth/client';
import ProcessNav from './components/ProcessNav';
import Welcome from './components/Welcome';
import WorkingInfo from './components/WorkingInfo';

const ProfileOverview = () => {
  const [session] = useSession();
  const { user } = session;

  const verified = true;
  const generalChallengeCompleted = true;
  const firstSkillCompleted = true;
  const level = "Expert";
  const rate = 25;
  const status = "Active";

  return (
    <section aria-labelledby="profile-overview-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
        <Welcome
          name={user.name}
          email={user.email}
          image={user.image}
        />
        {
          verified ? (
            <WorkingInfo
              level={level}
              rate={rate}
              status={status}
            />
          ) : (
              <ProcessNav
                generalChallengeCompleted={generalChallengeCompleted}
                firstSkillCompleted={firstSkillCompleted}
                reviewed={verified}
              />
            )
        }
      </div>
    </section>
  )
}

export default ProfileOverview;
import ProcessNav from './components/ProcessNav';
import Welcome from './components/Welcome';
import WorkingInfo from './components/WorkingInfo';

const ProfileOverview = ({
  name,
  email,
  image,
  verified,
  generalChallengeCompleted,
  firstSkillCompleted,
  rate,
  status
}) => {
  return (
    <section aria-labelledby="profile-overview-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
        <Welcome
          name={name}
          email={email}
          image={image}
        />
        {
          verified ? (
            <WorkingInfo
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
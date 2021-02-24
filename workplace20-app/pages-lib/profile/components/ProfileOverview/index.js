import { useQueryProfile } from 'pages-lib/_states';
import { useSession } from 'next-auth/client';
import {
  ProcessNav,
  Welcome,
  WorkingInfo,
  Loading,
  Error
} from './components';
import { Transition } from '@headlessui/react';
import { Card, CardContent } from 'pages-lib/_components/card';

const ProfileOverview = () => {
  const { data: profile, isLoading, isError } = useQueryProfile();
  const [session, loading] = useSession();
  const { user: { image } = {} } = session;

  const {
    name,
    email,
    verified,
    generalChallengeCompleted,
    skillMatrix,
    rate,
    status
  } = profile;

  const firstSkillCompleted = Object.keys(skillMatrix).length > 0;

  return (
    <Card>
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
          <div ref={ref}>
            <Error />
          </div>
        )}
      </Transition>
      <Transition
        show={isLoading || loading}
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
        show={!isLoading && !loading && !isError}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref}>
            <CardContent>
              <Welcome
                name={name}
                email={email}
                image={image}
              />
            </CardContent>
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
        )}
      </Transition>
    </Card>
  )
}

export default ProfileOverview;
import { useQueryProfile } from 'pages-lib/_states';
import { useSession } from 'next-auth/client';
import {
  ProcessNav,
  Welcome,
  Loading,
  Error
} from './components';
import { Transition } from '@headlessui/react';
import Card from 'pages-lib/_components/card';

const ProfileOverview = () => {
  const { data: profile, isLoading, isError } = useQueryProfile();
  const [session, loading] = useSession();
  if (!session || !profile) return null;

  const { user: { image } = {} } = session;

  const {
    name,
    email,
    // verified,
    generalChallengeCompleted,
    firstJobAdded,
    rate,
    status
  } = profile;

  const verified = true;

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
            <Card.Content>
              <Welcome
                name={name}
                email={email}
                image={image}
              />
            </Card.Content>
            <ProcessNav
              generalChallengeCompleted={generalChallengeCompleted}
              firstJobAdded={firstJobAdded}
              reviewed={verified}
            />
          </div>
        )}
      </Transition>
    </Card>
  )
}

export default ProfileOverview;
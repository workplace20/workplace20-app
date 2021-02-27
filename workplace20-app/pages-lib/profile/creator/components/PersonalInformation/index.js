import { useQueryProfile } from 'pages-lib/_states';
import { H3 } from 'pages-lib/_components/typography';
import {
  UpdateForm,
  PersonalInformationView,
  Loading,
} from './components';
import {
  Card,
  CardHeader,
  CardContent
} from 'pages-lib/_components/card';
import Button from 'pages-lib/_components/Button';
import { Transition } from '@headlessui/react';
import { useState } from "react";

const PersonalInformation = () => {
  const { data: profile, isLoading, isError } = useQueryProfile();

  const [isUpdating, setIsUpdating] = useState(false);

  const handleStartUpdate = () => setIsUpdating(true);
  const handleCancelUpdate = () => setIsUpdating(false);

  return (
    <Card>
      <CardHeader>
        <H3 className="py-2">
          Personal Information
        </H3>
        <Transition
          show={!isUpdating && !isLoading}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref}>
              <Button
                color="secondary"
                size="base"
                onClick={handleStartUpdate}
              >
                Update
              </Button>
            </div>
          )}
        </Transition>
      </CardHeader>

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
          <div ref={ref} >
            <CardContent className="text-center">
              <p class="text-sm text-red-600 my-2" id="email-error">Something went wrong on loading profile</p>
            </CardContent>
          </div>
        )}
      </Transition>

      <Transition
        show={isLoading}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} >
            <CardContent>
              <Loading />
            </CardContent>
          </div>
        )}
      </Transition>

      <Transition
        show={!isUpdating && !isLoading && !isError}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        {(ref) => (
          <div ref={ref}>
            <CardContent >
              <PersonalInformationView
                profile={profile}
              />
            </CardContent>
          </div>
        )}
      </Transition>

      <Transition
        show={isUpdating && !isLoading && !isError}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        {(ref) => (
          <div ref={ref}>
            <UpdateForm
              profile={profile}
              onCancelUpdate={handleCancelUpdate}
            />
          </div>
        )}
      </Transition>
    </Card>
  )
}

export default PersonalInformation;
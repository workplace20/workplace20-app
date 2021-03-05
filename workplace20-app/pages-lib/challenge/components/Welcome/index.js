import Link from "next/link";
import { Button } from 'pages-lib/_components/controls';
import {
  useQueryChallengeOverview,
  useMutateStartChallenge,
} from 'pages-lib/challenge/states';
import LoadingPage from 'pages-lib/loading';


const Welcome = ({ challengeId }) => {
  const { isLoading, isError, data: chalengeOverview } = useQueryChallengeOverview(challengeId);
  const { mutate: startChallenge, isLoading: startingChallenge, isError: startChallengeError } = useMutateStartChallenge(challengeId);

  if (isLoading || startingChallenge) {
    return (
      <LoadingPage />
    )
  }

  if (isError || startChallengeError) {
    return (
      <div>Something went wrong, please try again</div>
    )
  }

  const { description, totalQuestion, totalTime } = chalengeOverview;

  return (
    <div className="bg-white h-screen flex md:items-center py-4 sm:py-6 lg:py-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h3 className="text-4xl font-semibold text-gray-900 lg:leading-normal">{description}</h3>
        <p className="text-xl text-gray-700 lg:leading-normal mt-4">{`You need to answer ${totalQuestion} questions in ${totalTime} minutes`}</p>
        <div className="mt-8">
{/* 
         */}
          <Link href='/profile'>
            <Button
              color="white"
              size="lg"
            >
              I will do it later
            </Button>
          </ Link>
          <Button
            color="primary"
            size="lg"
            onClick={startChallenge}
            className="ml-2"
          >
            Continue
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;

import Link from "next/link";
import { 
  useQueryChallengeOverview,
  useMutateStartChallenge,
} from 'pages-lib/challenge/states/server';
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
          <Link href='/profile'>
            <a class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-white inline-flex justify-center">
              I will do it later
            </a>
          </ Link>
          <button onClick={startChallenge} class="py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ml-3 inline-flex justify-center bg-orange-500">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
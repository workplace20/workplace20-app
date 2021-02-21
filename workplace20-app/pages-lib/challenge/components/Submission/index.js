import { useRouter } from 'next/router';
import { useMutateSubmitChallenge} from 'pages-lib/challenge/states';

const Submission = ({ challengeId }) => {
  const router = useRouter();

  const { mutate, isLoading, isError } = useMutateSubmitChallenge(challengeId, () => {
    router.push('/profile');
  });

  return (
    <div className="bg-white py-4 sm:py-6 lg:py-8">
      <h3 className="text-2xl font-medium text-gray-900 lg:leading-medium text-center">Thanks for completing all questions, now you can submit to us.</h3>

      <div className="mt-4 text-center">
        <button onClick={mutate} className="inline-flex items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 inline-flex justify-center bg-orange-500 transition ease-in-out duration-150 disabled:cursor-not-allowed" disabled={isLoading}>
          {
            isLoading && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )
          }
          Submit
        </button>
        {
          isError && (
            <p className="text-lg text-red-500 text-center mt-4">
              Something went wrong please try again.
            </p>
          )
        }
      </div>
    </div>
  )
}

export default Submission;
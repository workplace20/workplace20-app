import { useRouter } from 'next/router';
import { H3 } from 'pages-lib/_components/typography';
import { Button } from 'pages-lib/_components/controls';
import { useMutateSubmitChallenge } from 'pages-lib/challenge/states';

const Submission = ({ challengeId }) => {
  const router = useRouter();

  const { mutate, isLoading, isError } = useMutateSubmitChallenge(challengeId, () => {
    router.push('/profile');
  });

  return (
    <div className="bg-white py-4 sm:py-6 lg:py-8">
      <H3 className="text-center">Thanks for completing all questions, now you can submit to us.</H3>

      <div className="mt-4 text-center">
        <Button
          color="primary"
          size="base"
          loading={isLoading}
          onClick={mutate}
        >
          Submit
        </Button>
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
import Link from "next/link";
import { Button } from 'pages-lib/_components/controls';

const Error = ({ errorMessage }) => {
  return (
    <div className="bg-white h-screen flex md:items-center py-4 sm:py-6 lg:py-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h3 className="text-4xl font-semibold text-gray-900 lg:leading-normal">{errorMessage}</h3>
        <div className="mt-8">
          <Link href='/profile'>
            <Button
              color="white"
              size="lg"
            >
              Back to profile
            </Button>
          </ Link>
        </div>
      </div>
    </div>
  )
}

export default Error;

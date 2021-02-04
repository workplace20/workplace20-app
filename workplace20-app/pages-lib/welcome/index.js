import Link from "next/link";

const Welcome = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center lg:items-center">
      <div className="max-w-4xl px-6 pt-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <p className="text-4xl font-semibold orange-700 text-gray-900 sm:text-center">Next, please take a few minutes to share us about yourself and your working experience</p>
          <div className="mt-8 sm:text-center">
            <Link href='/dashboard'>
              <a class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-white inline-flex justify-center">
                I will do it later
              </a>
            </ Link>
            <Link href='/challenge'>
              <a class="py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ml-3 inline-flex justify-center bg-orange-500 ">
                Continue
              </a>
            </ Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
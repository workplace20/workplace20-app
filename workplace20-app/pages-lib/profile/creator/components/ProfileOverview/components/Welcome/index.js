import { Avatar } from 'pages-lib/_components/controls';

const Welcome = ({
  image,
  name,
  email
}) => (
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="sm:flex sm:space-x-5">
        <div className="flex-shrink-0">
          <Avatar
            image={image}
            size="lg"
          />
        </div>
        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
          <p className="text-sm font-medium text-gray-600">Welcome back,</p>
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">{name}</p>
          <p className="text-sm font-medium text-gray-600">{email}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-center sm:mt-0">
        <a href="#" className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          View Mached Jobs
        </a>
      </div>
    </div>
  )

export default Welcome;
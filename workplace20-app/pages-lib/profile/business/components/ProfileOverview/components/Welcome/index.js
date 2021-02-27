import Avatar from 'pages-lib/_components/Avatar';
import Button from 'pages-lib/_components/Button';

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
        <Button
          color="secondary"
          size="lg"
        >
          Add Job
        </Button>
      </div>
    </div>
  )

export default Welcome;
import formatDate from 'pages-lib/_utils/formatDate';
import { TextField } from 'pages-lib/_components/controls';

const PersonalInformationView = ({
  profile = {}
}) => {
  const {
    name,
    email,
    dateOfBirth,
    phoneNumber,
    yearOfExperience,
    skype,
    address,
    about,
  } = profile;

  return (
    <>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <TextField
            label="Name"
            value={name}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Email address"
            value={email}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Birthday"
            value={dateOfBirth && formatDate(new Date(dateOfBirth))}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Phone Number"
            value={phoneNumber}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Experience"
            value={`${yearOfExperience} years`}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Skype"
            value={skype}
          />
        </div>
        <div className="sm:col-span-2">
          <TextField
            label="Address"
            value={address}
          />
        </div>
        <div className="sm:col-span-2">
          <TextField
            label="About"
            value={about}
          />
        </div>
      </dl>
    </>
  )
}

export default PersonalInformationView;
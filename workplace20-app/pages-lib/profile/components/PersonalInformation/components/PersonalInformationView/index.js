import formatDate from 'pages-lib/_utils/formatDate';

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
          <Field
            label="Name"
            value={name}
          />
        </div>
        <div className="sm:col-span-1">
          <Field
            label="Email address"
            value={email}
          />
        </div>
        <div className="sm:col-span-1">
          <Field
            label="Birthday"
            value={dateOfBirth ? formatDate(new Date(dateOfBirth)) : 'N/A'}
          />
        </div>
        <div className="sm:col-span-1">
          <Field
            label="Phone Number"
            value={phoneNumber}
          />
        </div>
        <div className="sm:col-span-1">
          <Field
            label="Experience"
            value={`${yearOfExperience} years`}
          />
        </div>
        <div className="sm:col-span-1">
          <Field
            label="Skype"
            value={skype}
          />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Address"
            value={address}
          />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="About"
            value={about}
          />
        </div>
      </dl>
    </>
  )
}

const Field = ({ label, value = 'N/A' }) => (
  <>
    <dt className="text-sm font-medium text-gray-500">
      {label}
    </dt>
    <dd className="mt-1 text-sm text-gray-900">
      {value}
    </dd>
  </>
)

export default PersonalInformationView;
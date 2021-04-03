import { TextField } from 'pages-lib/_components/controls';

const AboutCompany = ({
  companyName,
  country,
  email,
  phoneNumber,
  yearFounded,
  companySize,
  companyType,
  website,
  about
}) => (
    <>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <TextField
            label="Company Name"
            value={companyName}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Country"
            value={country}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Contact Email"
            value={email}
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
            label="Year founded"
            value={yearFounded}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Company size"
            value={companySize && `${companySize} employers`}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Company type"
            value={companyType}
          />
        </div>
        <div className="sm:col-span-1">
          <TextField
            label="Website"
            value={website}
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

export default AboutCompany;
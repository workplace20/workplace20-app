import { Formik, Form } from 'formik';
import { Button } from 'pages-lib/_components/controls';
import { Transition } from '@headlessui/react';
import {
  FormTextInput,
  FormTextAreaInput,
  FormSelectInput
} from 'pages-lib/_components/form';
import { useMutateUpdateProfile } from 'pages-lib/_states';
import Card from 'pages-lib/_components/card';
import * as Yup from 'yup';

const UpdateForm = ({
  profile = {},
  onCancelUpdate
}) => {
  const {
    businessName,
    country,
    phoneNumber,
    yearFounded,
    companySize,
    companyType,
    website,
    about,
  } = profile;

  const { mutate: onSaveProfile, isLoading, isError } = useMutateUpdateProfile(() => onCancelUpdate());

  return (
    <Formik
      initialValues={{
        businessName,
        country,
        phoneNumber,
        yearFounded,
        companySize,
        companyType,
        website,
        about,
      }}
      validationSchema={Yup.object({
        businessName: Yup.string()
          .required('The business name is required'),
        country: Yup.string()
          .required('The country is required'),
        phoneNumber: Yup.string()
          .required('The phone number is required')
          .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'The phone number is not valid'),
        yearFounded: Yup.number()
          .required('The founded year is required')
          .typeError("The founded year have to be a number")
          .positive("The founded year have to be greater than 0"),
        companySize: Yup.string()
          .required('The company size is required'),
        companyType: Yup.string()
          .required('The company type is required'),
        website: Yup.string()
          .required('The company website is required'),
      })}
      onSubmit={onSaveProfile}
    >
      <Form>
        <Card.Content>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <FormTextInput
                label="Business Name"
                name="businessName"
                required
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormTextInput
                label="Country"
                name="country"
                required
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormTextInput
                label="Phone number"
                name="phoneNumber"
                required
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormTextInput
                label="Year Founded"
                name="yearFounded"
                required
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormTextInput
                label="Website"
                name="website"
                required
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormSelectInput
                options={[
                  {
                    label: '0-1 employees',
                    value: '0-1'
                  },
                  {
                    label: '2-10 employees',
                    value: '2-10'
                  },
                  {
                    label: '11-50 employees',
                    value: '11-50'
                  },
                  {
                    label: '51-200 employees',
                    value: '51-200'
                  },
                  {
                    label: '201-500 employees',
                    value: '201-500'
                  },
                  {
                    label: '501-1000 employees',
                    value: '501-1000'
                  },
                  {
                    label: '1000-1000 employees',
                    value: '1000-1000'
                  },
                  {
                    label: '5000-10000 employees',
                    value: '5000-10000'
                  },
                  {
                    label: '10000+ employees',
                    value: '10000+'
                  }
                ]}
                label="Company size"
                name="companySize"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormSelectInput
                options={[
                  {
                    label: 'Educational Institution',
                    value: 'educationalInstitution'
                  },
                  {
                    label: 'Government Agency',
                    value: 'governmentAgency'
                  },
                  {
                    label: 'Nonprofit',
                    value: 'nonprofit'
                  },
                  {
                    label: 'Partnership',
                    value: 'partnership'
                  },
                  {
                    label: 'Privately Held',
                    value: 'privatelyHeld'
                  },
                  {
                    label: 'Public Company',
                    value: 'publicCompany'
                  },
                  {
                    label: 'Self-Employed',
                    value: 'selfEmployed'
                  },
                  {
                    label: 'Sole Proprietorship',
                    value: 'soleProprietorship'
                  },
                ]}
                label="Company Type"
                name="companyType"
                required
              />
            </div>
            <div class="col-span-6">
              <FormTextAreaInput
                label="About"
                name="about"
                helpText="Write a few sentences about yourself."
                rows={3}
              />
            </div>
          </div>
        </Card.Content>
        <Card.Footer className="text-right">
          <Transition
            show={isError}
            enter="transition duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <p ref={ref} class="text-sm text-red-600 mb-2" id="email-error">Something went wrong on saving profile</p>
            )}
          </Transition>

          <div>
            <Button
              color="white"
              size="base"
              onClick={onCancelUpdate}
            >
              Cancel
          </Button>
            <Button
              type="submit"
              color="primary"
              size="base"
              loading={isLoading}
              className="ml-2"
            >
              Save
            </Button>
          </div>
        </Card.Footer>
      </Form>
    </Formik>
  )
}

export default UpdateForm;
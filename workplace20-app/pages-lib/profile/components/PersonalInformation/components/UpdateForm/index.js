import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form } from 'formik';
import { Transition } from '@headlessui/react';
import { FormTextInput, FormDatePicker, FormTextAreaInput } from 'pages-lib/_components/form';
import { useMutateUpdateProfile } from 'pages-lib/_states';
import * as Yup from 'yup';

const UpdateForm = ({
  profile = {},
  onCancelUpdate
}) => {
  const {
    name,
    dateOfBirth,
    phoneNumber,
    yearOfExperience,
    skype,
    address,
    about,
  } = profile;

  const { mutate: onSaveProfile, isLoading, isError } = useMutateUpdateProfile(() => onCancelUpdate());

  return (
    <Formik
      initialValues={{
        name,
        phoneNumber,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        yearOfExperience,
        skype,
        address,
        about
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('The name is required'),
        address: Yup.string()
          .required('The address is required'),
        phoneNumber: Yup.string()
          .required('The phone number is required')
          .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'The phone number is not valid'),
        yearOfExperience: Yup.number()
          .required('The year of experience is required')
          .typeError("The year of experience have to be a number")
          .positive("The year of experience have to be greater than 0"),
        dateOfBirth: Yup.date()
          .required('The birth day is required')
          .typeError("The birth day have to be a date")
      })}
      onSubmit={onSaveProfile}
    >
      <Form>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <FormTextInput
                label="Display Name"
                name="name"
                required
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormDatePicker
                label="Birthday"
                name="dateOfBirth"
                required
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
                label="Skype"
                name="skype"
                type="text"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormTextInput
                label="Year of experience"
                name="yearOfExperience"
                required
                type="text"
              />
            </div>

            <div className="col-span-6">
              <FormTextAreaInput
                label="Address"
                name="address"
                required
                rows={2}
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
        </div>
        <div className="px-4 py-3 bg-gray-50 sm:px-6 text-right">
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
            <button onClick={onCancelUpdate} className="inline-flex justify-center py-2 px-4 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Cancel
          </button>
            <button
              type="submit"
              className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              <Transition
                show={isLoading}
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {(ref) => (
                  <svg ref={ref} className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
              </Transition>
            Save
          </button>
          </div>

        </div>
      </Form>
    </Formik>
  )
}

export default UpdateForm;
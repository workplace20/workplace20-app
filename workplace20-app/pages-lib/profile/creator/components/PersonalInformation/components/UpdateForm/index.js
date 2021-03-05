import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form } from 'formik';
import { Button } from 'pages-lib/_components/controls';
import { Transition } from '@headlessui/react';
import { FormTextInput, FormDatePicker, FormTextAreaInput } from 'pages-lib/_components/form';
import { useMutateUpdateProfile } from 'pages-lib/_states';
import {
  CardContent,
  CardFooter
} from 'pages-lib/_components/card';
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
        <CardContent>
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
        </CardContent>
        <CardFooter className="text-right">
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
        </CardFooter>
      </Form>
    </Formik>
  )
}

export default UpdateForm;
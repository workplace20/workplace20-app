import { Formik, Form } from 'formik';
import Link from 'next/link';
import { Button } from 'pages-lib/_components/controls';
import { Transition } from '@headlessui/react';
import {
  FormTextInput,
  FormTextAreaInput,
  FormSelectInput,
  FormMarkDownEditor,
  FormSelectChip
} from 'pages-lib/_components/form';
import Card from 'pages-lib/_components/card';
import { H3 } from 'pages-lib/_components/typography';
import * as Yup from 'yup';

const JobForm = ({
  title,
  initialValues,
  availableSkills,
  isSubmiting,
  isSubmitError,
  onSubmit
}) => {
  return (
    <Card>
      <Card.Header>
        <H3 className="py-2">
          {title}
        </H3>
      </Card.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('The job title is required'),
          requiredSkills: Yup.array()
            .required('The job skills is required')
            .min(1, 'The job skills is required'),
          level: Yup.string()
            .required('The level is required'),
          english: Yup.string()
            .required('The english level is required'),
          introduction: Yup.string()
            .required('The job introduction is required'),
          description: Yup.string()
            .required('The job description is required'),
        })}
        onSubmit={onSubmit}
      >
        <Form>
          <Card.Content>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <FormTextInput
                  label="Title"
                  name="title"
                  required
                  type="text"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <FormSelectInput
                  options={[
                    {
                      label: 'Beginner',
                      value: 'Beginner'
                    },
                    {
                      label: 'Average',
                      value: 'Average'
                    },
                    {
                      label: 'Skilled',
                      value: 'Skilled'
                    },
                    {
                      label: 'Specialist',
                      value: 'Specialist'
                    },
                    {
                      label: 'Expert',
                      value: 'Expert'
                    }
                  ]}
                  label="Level"
                  name="level"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <FormSelectInput
                  options={[
                    {
                      label: 'Beginer',
                      value: 'Beginer'
                    },
                    {
                      label: 'Intermadiate',
                      value: 'Intermadiate'
                    },
                    {
                      label: 'Advance',
                      value: 'Advance'
                    },
                  ]}
                  label="English"
                  name="english"
                  required
                />
              </div>
              <div class="col-span-6">
                <FormSelectChip
                  label="Skills"
                  name="requiredSkills"
                  required
                  multipleSelect={true}
                  options={availableSkills.map(x => ({
                    label: x.name,
                    value: x.code
                  }))}
                />
              </div>
              <div class="col-span-6">
                <FormTextAreaInput
                  label="Introduction"
                  name="introduction"
                  helpText="Write a few sentences to introduce your job."
                  required
                  rows={3}
                />
              </div>
              <div class="col-span-6">
                <FormMarkDownEditor
                  label="Job Description"
                  name="description"
                  required
                />
              </div>
            </div>
          </Card.Content>
          <Card.Footer className="text-right">
            <Transition
              show={isSubmitError}
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
              <Link href="/profile/jobs">
                <Button
                  color="white"
                  size="base"
                >
                  Cancel
              </Button>
              </Link>

              <Button
                type="submit"
                color="primary"
                size="base"
                loading={isSubmiting}
                className="ml-2"
              >
                Save
            </Button>
            </div>
          </Card.Footer>
        </Form>
      </Formik>
    </Card>
  )
}

export default JobForm;

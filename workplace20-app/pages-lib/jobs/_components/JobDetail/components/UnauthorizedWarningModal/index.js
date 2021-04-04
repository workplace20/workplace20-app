import Modal from 'pages-lib/_components/Modal';
import { JobSkillList } from 'pages-lib/jobs/_components';
import { H3, H1 } from 'pages-lib/_components/typography';
import { Button } from 'pages-lib/_components/controls';
import Link from 'next/link';

const AuthenticationWarningModal = ({
  open,
  title,
  skills,
  onCancel
}) => (
    <Modal
      open={open}
      icon="error"
    >
      <div className="mt-3 text-center sm:mt-5">
        <p className="text-red-600">
          You have to LOG IN to apply to
        </p>
        <div className="mt-4 mb-8">
          <div className="2xl:block min-w-0 flex-1">
            <H1>
              {title}
            </H1>
            <div className="space-x-1 pt-2">
              <JobSkillList
                skills={skills}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <Link href="/api/auth/signin">
          <Button className="w-full justify-center sm:col-start-2">
            Log In
          </Button>
        </Link>
        <Button
          color="white"
          className="mt-3 sm:mt-0 w-full justify-center sm:col-start-1"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )

export default AuthenticationWarningModal;

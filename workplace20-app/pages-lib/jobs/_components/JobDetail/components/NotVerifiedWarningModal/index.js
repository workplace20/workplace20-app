import Modal from 'pages-lib/_components/Modal';
import { JobSkillList } from 'pages-lib/jobs/_components';
import { H3, H1 } from 'pages-lib/_components/typography';
import { Button } from 'pages-lib/_components/controls';
import Link from 'next/link';

const AuthenticationWarningModal = ({
  open,
  onCancel
}) => (
    <Modal
      open={open}
      icon="error"
    >
      <div className="mt-3 text-center sm:mt-5">
        <H3 className="text-red-600">
          You have not completed the onboarding process yet
        </H3>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <Link href="/profile">
          <Button className="w-full justify-center sm:col-start-2">
            Back to profile
          </Button>
        </Link>
        <Button
          color="white"
          className="mt-3 sm:mt-0 w-full justify-center sm:col-start-1"
          onClick={onCancel}
        >
          Close
        </Button>
      </div>
    </Modal>
  )

export default AuthenticationWarningModal;

import { H3 } from 'pages-lib/_components/typography';
import { Button } from 'pages-lib/_components/controls';
import Modal from 'pages-lib/_components/Modal';

const ApplySuccess = ({
  open,
  onClose,
}) => (
    <Modal
      open={open}
      icon='success'
    >
      <div className="mt-3 text-center sm:mt-5">
        <H3>
          We have received your application
        </H3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            Thanks for applying to the job. We have received your application and you will hear from us soon!
            </p>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <Button
          color="secondary"
          className="w-full justify-center"
          onClick={onClose}
        >
          Back to jobs screen
        </Button>
      </div>
    </Modal>
  )

export default ApplySuccess;
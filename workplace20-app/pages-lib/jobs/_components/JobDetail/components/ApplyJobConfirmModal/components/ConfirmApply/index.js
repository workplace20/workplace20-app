import { JobSkillList } from 'pages-lib/jobs/_components';
import { H1 } from 'pages-lib/_components/typography';
import { Button } from 'pages-lib/_components/controls';
import Modal from 'pages-lib/_components/Modal';

const ConfirmApply = ({
  open,
  title,
  skills,
  isLoading,
  onCancel,
  onApplyJob
}) => (
    <Modal open={open}>
      <div className="mt-3 text-center sm:mt-5">
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
        <Button
          loading={isLoading}
          onClick={onApplyJob}
          className="w-full justify-center sm:col-start-2"
        >
          Apply
      </Button>
        <Button
          disabled={isLoading}
          color="white"
          className="mt-3 sm:mt-0 w-full justify-center sm:col-start-1"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )

export default ConfirmApply;
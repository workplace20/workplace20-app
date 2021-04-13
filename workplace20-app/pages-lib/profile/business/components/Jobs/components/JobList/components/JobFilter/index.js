import classnames from 'classnames';
import { SelectBox, Button } from 'pages-lib/_components/controls';
import { JOB_TYPES_LIST } from 'pages-lib/profile/business/components/Jobs/_utils/constants';
import { useMutateSelectJobList } from 'pages-lib/profile/business/components/Jobs/_states';

const JobFilter = ({
  jobType
}) => {
  const selectJobList = useMutateSelectJobList();

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="question-tabs" className="sr-only">Select a tab</label>
        <SelectBox
          options={
            JOB_TYPES_LIST.map(type => ({
              label: type.name,
              value: type.value
            }))
          }
          value={jobType}
          onChange={(value) => selectJobList(value)}
        />
      </div>
      <div className="hidden sm:block">
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {
            JOB_TYPES_LIST.map((type, i) => {
              const isSelected = jobType == type.value;

              return (
                <button
                  onClick={() => selectJobList(type.value)}
                  className={classnames(
                    'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 focus:outline-none',
                    {
                      'text-gray-900': isSelected,
                      'text-gray-500 hover:text-gray-700': !isSelected,
                      'rounded-l-lg': i === 0,
                      'rounded-r-lg' : i === JOB_TYPES_LIST.length - 1
                    }
                  )}>
                  <span>{type.name}</span>
                  <span aria-hidden="true" className={classnames(
                    'absolute inset-x-0 bottom-0 h-0.5',
                    {
                      'bg-orange-500': isSelected,
                      'bg-transparent': !isSelected,
                    }
                  )} />
                </button>
              )
            })
          }
        </nav>
      </div>
    </>
  )
}

export default JobFilter;
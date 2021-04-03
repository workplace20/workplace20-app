import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from "next/link";
import { SelectBox } from 'pages-lib/_components/controls';

const JobFilter = () => {
  const router = useRouter();
  const { query } = router;
  const { type: selectedType = 'active' } = query;

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="question-tabs" className="sr-only">Select a tab</label>
        <SelectBox 
          options={
            jobTypes.map(type => ({
              label: type.name,
              value: type.value
            }))
          }
          value={selectedType}
          onChange={(value) => router.push(`/profile/jobs?type=${value}`)}
        />
      </div>
      <div className="hidden sm:block">
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {
            jobTypes.map(type => {
              const isSelected = selectedType == type.value;

              return (
                <Link href={`/profile/jobs?type=${type.value}`}>
                  <a
                    className={classnames(
                      'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
                      {
                        'text-gray-900 rounded-l-lg': isSelected,
                        'text-gray-500 hover:text-gray-700': !isSelected
                      }
                    )}>
                    <span>{type.name}</span>
                    <span aria-hidden="true" className={classnames(
                      'absolute inset-x-0 bottom-0 h-0.5',
                      {
                        'bg-orange-500': isSelected,
                        'bg-transparent': !isSelected
                      }
                    )} />
                  </a>
                </Link>
              )
            })
          }
        </nav>
      </div>
    </>
  )
}

const jobTypes = [
  {
    value: 'active',
    name: 'Active',
  },
  {
    value: 'review',
    name: 'Review',
  },
  {
    value: 'deactive',
    name: 'Deactive',
  }
];

export default JobFilter;
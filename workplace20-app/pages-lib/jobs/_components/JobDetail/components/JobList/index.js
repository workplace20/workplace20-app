import { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { Image } from 'pages-lib/_components/controls';
import Link from 'next/link';

const JobList = ({
  jobList
}) => {
  const selectedJobRef = useRef(null);
  useEffect(() => {
    selectedJobRef.current.scrollIntoView({ block: "nearest" });
  }, []);

  return (
    <>
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-lg font-medium text-gray-900">Jobs</h2>
      </div>
      <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
        <div className="relative">
          <ul className="relative z-0 divide-y divide-gray-200 border-t border-b border-gray-200">
            {
              jobList
                .map((jobItem) => (
                  <JobItem
                    {...jobItem}
                    selectedJobRef={selectedJobRef}
                  />
                ))
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

const JobItem = ({
  id,
  url,
  title,
  selected,
  logoUrl,
  companyName,
  selectedJobRef
}) => (
    <li key={id} ref={selected ? selectedJobRef : null}>
      <Link href={url}>
        <div className={classnames(
          'relative px-6 py-5 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500',
          {
            'bg-orange-100': selected,
            'hover:bg-orange-50': !selected
          }
        )}>
          <div className="flex-shrink-0">
            <Image
              url={logoUrl}
            />
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className={classnames(
                'text-sm font-medium',
                {
                  'text-orange-800': selected,
                  'text-gray-900': !selected
                }
              )}>
                {title}
              </p>
              <p className={classnames(
                'text-sm truncate',
                {
                  'text-orange-700 opacity-80': selected,
                  'text-gray-500': !selected
                }
              )}>
                {companyName}
              </p>
            </a>
          </div>
        </div>
      </Link>
    </li>
  )

export default JobList;
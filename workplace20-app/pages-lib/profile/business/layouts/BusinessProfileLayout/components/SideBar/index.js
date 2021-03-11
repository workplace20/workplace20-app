import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from "next/link";

const SideBar = () => {
  const { pathname } = useRouter();

  return (
    <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
      <div className="space-y-1">
        {
          menuItems.map(item => {
            const isSelected = item.isSelected(pathname);

            return (
              <Link href={item.link}>
                <a
                  className={classnames(
                    'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                    {
                      'text-gray-900 hover:text-gray-900 hover:bg-gray-50': !isSelected,
                      'bg-gray-50 text-orange-600 hover:bg-white': isSelected,
                    }
                  )}>
                  <span className="truncate">
                    {item.name}
                  </span>
                </a>
              </Link>
            )
          })
        }
      </div>
    </nav>
  )
}

const menuItems = [
  {
    value: 'businessInfo',
    name: 'Business Information',
    icon: (
      <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: '/profile',
    isSelected: (path) => path ==='/profile'
  },
  {
    value: 'jobs',
    name: 'Jobs',
    icon: (
      <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: '/profile/jobs',
    isSelected: (path) => path.includes('/profile/job')
  }
];

export default SideBar;

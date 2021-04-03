import Link from "next/link";

const Navigation = ({
  url,
  children
}) => (
  <nav className="flex items-start pt-6 xl:hidden max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
    <Link href={url}>
      <a className="inline-flex items-center space-x-1 md:space-x-2 text-sm font-medium text-gray-900">
        <svg className="-ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>{ children }</span>
      </a>
    </Link>
  </nav>
)

export default Navigation;
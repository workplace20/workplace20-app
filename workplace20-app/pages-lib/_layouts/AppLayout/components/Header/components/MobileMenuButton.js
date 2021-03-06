import classnames from 'classnames';
import {
  useQueryIsMobileMenuOpened,
  useMutateOpenMobileMenu
} from 'pages-lib/_layouts/AppLayout/states';

const MobileMenuButton = () => {
  const isOpened = useQueryIsMobileMenuOpened();
  const handleOpenMenuClick = useMutateOpenMobileMenu();

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-orange-50 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false"
        onClick={handleOpenMenuClick}
      >
        <span className="sr-only">Open main menu</span>
        {/*
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          */}
        <svg className={classnames(
          'h-6 w-6',
          {
            'block': isOpened,
            'hidden': !isOpened
          }
        )} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        {/*
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          */}
        <svg className={classnames(
          'h-6 w-6',
          {
            'hidden': isOpened,
            'block': !isOpened
          }
        )} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  )
}

export default MobileMenuButton;
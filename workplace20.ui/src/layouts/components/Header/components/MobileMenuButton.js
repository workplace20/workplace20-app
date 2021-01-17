import { isMobileMenuOpened } from '../states/mobileMenu/selectors';
import MobileMenuState from '../states/mobileMenu';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const MobileMenuButton = () => {
  const isOpened = useRecoilValue(isMobileMenuOpened);
  const setMobileMenuState = useSetRecoilState(MobileMenuState);

  const handleOpenMenuClick = () => {
    setMobileMenuState({
      isOpened: true,
    })
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false"
        onClick={handleOpenMenuClick}
      >
        <span className="sr-only">Open main menu</span>
          {/*
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          */}
          <svg className={`${isOpened ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          {/*
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          */}
          <svg className={`${isOpened ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </button>
    </>
  )
}

export default MobileMenuButton;
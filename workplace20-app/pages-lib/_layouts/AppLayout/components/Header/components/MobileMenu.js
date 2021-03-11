import { useQueryProfileKind } from 'pages-lib/_states';
import { Logo } from 'pages-lib/_components/controls';
import {
  useQueryMainMenuItems,
  useQueryProfileMenuItems,
  useQueryIsMobileMenuOpened,
  useMutateCloseMobileMenu
} from 'pages-lib/_layouts/AppLayout/states';
import { Transition } from '@headlessui/react';
import Link from "next/link";
import { useSession } from 'next-auth/client';

const MobileMenu = () => {
  const { data: profileKind } = useQueryProfileKind();
  const menuItems = useQueryMainMenuItems(profileKind);
  const profileMenuItems = useQueryProfileMenuItems();
  const isOpened = useQueryIsMobileMenuOpened();
  const handleCloseMenuClick = useMutateCloseMobileMenu();
  const [session] = useSession();

  return (
    <>
      <Transition
        show={isOpened}
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} className="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden" aria-hidden="true" />
        )}
      </Transition>
      <Transition
        show={isOpened}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top lg:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
              <div className="pt-3 pb-2">
                <div className="flex items-center justify-between px-4">
                  <Link href="/">
                    <a>
                      <Logo size="base" />
                    </a>
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                      onClick={handleCloseMenuClick}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: x */}
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {
                    menuItems.map(item => (
                      <Link href={item.path}>
                        <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">{item.name}</a>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className="pt-4 pb-2">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={session.user.image} alt="avatar" />
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="text-base font-medium text-gray-800 truncate">{session.user.name}</div>
                    <div className="text-sm font-medium text-gray-500 truncate">{session.user.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {
                    profileMenuItems.map(item => (
                      <Link href={item.path}>
                        <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">{item.name}</a>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  )
}

export default MobileMenu;
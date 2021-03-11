import { useQueryProfileKind } from 'pages-lib/_states';
import {
  useQueryMainMenuItems,
  useQueryProfileMenuItems,
  useQueryIsMobileMenuOpened,
  useMutateCloseMobileMenu
} from 'pages-lib/_layouts/MarketingLayout/states';
import { Logo } from 'pages-lib/_components/controls';
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
  console.log('isOpened', isOpened)
  return (
    <>
      <Transition
        show={isOpened}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} class="z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a>
                      <Logo />
                    </a>
                  </Link>
                </div>
                <div class="-mr-2">
                  <button onClick={handleCloseMenuClick} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div class="px-2 pt-2 pb-3" role="none">
                  {
                    menuItems.map(item => (
                      <Link href={item.path}>
                        <a class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">{item.name}</a>
                      </Link>
                    ))
                  }
                </div>
                {
                  session ? (
                    <div className="pt-4 pb-2 border-t-2 border-gray-200">
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
                  ) : (
                      <div role="none">
                        <Link href="/api/auth/signin">
                          <a className="block w-full px-5 py-3 text-center font-medium text-orange-500 bg-gray-50 hover:bg-gray-100" role="menuitem">
                            Log in
										</a>
                        </Link>
                      </div>
                    )
                }
              </div>
            </div>
          </div>)}
      </Transition>
    </>
  )
}

export default MobileMenu;
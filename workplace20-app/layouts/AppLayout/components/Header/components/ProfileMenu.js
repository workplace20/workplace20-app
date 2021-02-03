import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useRecoilValue } from 'recoil';
import Link from "next/link";
import ProfileMenuState from 'layouts/AppLayout/states/profileMenu';
import { useSession } from 'next-auth/client';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = useRecoilValue(ProfileMenuState);
  const [session] = useSession();

  return (
    <div className="ml-4 relative flex-shrink-0">
      <div>
        <button
          type="button"
          className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu" aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={session.user.image} alt="avatar" />
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            {
              menuItems.map(item => (
                <Link href={item.path}>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item.name}</a>
                </Link>
              ))
            }
          </div>
        )}
      </Transition>
    </div>
  )
}

export default ProfileMenu;
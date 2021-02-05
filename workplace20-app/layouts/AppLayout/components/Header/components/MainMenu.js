import MainMenuState from 'layouts/AppLayout/states/mainMenu';
import { useRecoilValue } from 'recoil';
import Link from "next/link";
import { useRouter } from 'next/router'

const MainMenu = () => {
  const menuItems = useRecoilValue(MainMenuState);
  const router = useRouter();

  const isActive = (pathname) => router.pathname.startsWith(pathname);

  return (
    <div className="hidden lg:block">
      <nav className="flex space-x-4">
          {
            menuItems.map(item => (
              <Link href={item.path}>
                 <a className={`${isActive(item.path) ? 'text-white font-extrabold' : 'text-orange-200'} text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10`}>{item.name}</a>
              </Link>
            ))
          }
      </nav>
    </div>
  )
}

export default MainMenu;
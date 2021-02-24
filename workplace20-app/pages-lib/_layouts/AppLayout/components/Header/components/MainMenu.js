import classnames from 'classnames';
import { useQueryMainMenuItems } from 'pages-lib/_layouts/AppLayout/states';
import Link from "next/link";
import { useRouter } from 'next/router'

const MainMenu = () => {
  const menuItems = useQueryMainMenuItems();
  const router = useRouter();

  const isActive = (pathname) => router.pathname.startsWith(pathname);

  return (
    <div className="hidden lg:block">
      <nav className="flex space-x-4">
        {
          menuItems.map(item => (
            <Link href={item.path}>
              <a className={classnames(
                'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10',
                {
                  'text-white font-extrabold': isActive(item.path),
                  'text-orange-200': !isActive(item.path)
                }
              )}>{item.name}</a>
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

export default MainMenu;
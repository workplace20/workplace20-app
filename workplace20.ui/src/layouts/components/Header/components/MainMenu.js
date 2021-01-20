import MainMenuState from '../../../states/mainMenu';
import { useRecoilValue } from 'recoil';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default () => {
  const menuItems = useRecoilValue(MainMenuState);
  const location = useLocation();
  const isActive = (pathname) => location.pathname == pathname;

  return (
    <div className="hidden lg:block lg:col-span-2">
      <nav className="flex space-x-4">
          {
            menuItems.map(item => (
              <Link className={`${isActive(item.path) ? 'text-white' : 'text-cyan-100'} text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10`} to={item.path}>{item.name}</Link>
            ))
          }
      </nav>
    </div>
  )
}
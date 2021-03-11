import { useRecoilValue } from 'recoil';
import mainMenuState from '../atoms/mainMenu';

const useQueryMainMenuItems = () => {
  const menuItems = useRecoilValue(mainMenuState);

  return menuItems;
}

export default useQueryMainMenuItems;
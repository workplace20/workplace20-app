import { useRecoilValue } from 'recoil';
import mainMenuState from '../atoms/mainMenu';

const useQueryMainMenuItems = (profileKind) => {
  const menuItems = useRecoilValue(mainMenuState);

  return menuItems[profileKind];
}

export default useQueryMainMenuItems;
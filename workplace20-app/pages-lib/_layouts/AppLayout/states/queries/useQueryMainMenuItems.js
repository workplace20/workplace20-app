import { useRecoilValue } from 'recoil';
import mainMenuState from '../atoms/mainMenu';

const useQueryMainMenuItems = () => {
  return useRecoilValue(mainMenuState);
}

export default useQueryMainMenuItems;
import { useSetRecoilState, selector } from 'recoil';
import mobileMenuState from '../atoms/mobileMenu';

const closeMobileMenu = selector({
  key: "close_mobile_menu",
  set: ({set}) => {
    set(mobileMenuState, {
      isOpened: false,
    });
  }
});

const useQueryProfileMenuItems = () => useSetRecoilState(closeMobileMenu);

export default useQueryProfileMenuItems;
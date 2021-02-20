import { useSetRecoilState, selector } from 'recoil';
import mobileMenuState from '../atoms/mobileMenu';

const openMobileMenu = selector({
  key: "open_mobile_menu",
  set: ({set}) => {
    set(mobileMenuState, {
      isOpened: true,
    });
  }
});

const useQueryProfileMenuItems = () => useSetRecoilState(openMobileMenu);

export default useQueryProfileMenuItems;
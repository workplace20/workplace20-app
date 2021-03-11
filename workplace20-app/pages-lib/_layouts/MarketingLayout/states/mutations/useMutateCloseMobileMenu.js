import { useSetRecoilState, selector } from 'recoil';
import mobileMenuState from '../atoms/mobileMenu';

const closeMobileMenu = selector({
  key: "close_marketing_mobile_menu",
  set: ({set}) => {
    set(mobileMenuState, {
      isOpened: false,
    });
  }
});

const useMutateCloseMobileMenu = () => useSetRecoilState(closeMobileMenu);

export default useMutateCloseMobileMenu;
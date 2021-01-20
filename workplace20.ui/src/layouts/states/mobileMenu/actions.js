import mobileMenuState from './index';
import { selector } from 'recoil';

export const openMobileMenu = selector({
  key: "open_mobile_menu",
  set: ({set}) => {
    set(mobileMenuState, {
      isOpened: true,
    });
  }
});

export const closeMobileMenu = selector({
  key: "close_mobile_menu",
  set: ({set}) => {
    set(mobileMenuState, {
      isOpened: false,
    });
  }
});
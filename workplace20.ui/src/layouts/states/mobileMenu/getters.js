import mobileMenuState from './index';
import { selector } from 'recoil';

export const isMobileMenuOpened = selector({
  key: "is_mobile_menu_opened",
  get: ({get}) => {
    const state = get(mobileMenuState);

    return state.isOpened;
  }
});
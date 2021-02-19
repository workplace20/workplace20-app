import { atom } from 'recoil';

export default atom({
  key: "mobile_menu_state",
  default: {
    isOpened: false,
  }
});

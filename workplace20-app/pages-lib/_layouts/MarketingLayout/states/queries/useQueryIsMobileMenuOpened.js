import { useRecoilValue, selector } from 'recoil';
import mobileMenuState from '../atoms/mobileMenu';

export const isMobileMenuOpened = selector({
  key: "is_marketing_mobile_menu_opened",
  get: ({get}) => {
    const state = get(mobileMenuState);

    return state.isOpened;
  }
});

const useQueryIsMobileMenuOpened = () => useRecoilValue(isMobileMenuOpened);

export default useQueryIsMobileMenuOpened;
import menuState from '../atoms/menu';
import { selector, useSetRecoilState } from 'recoil';

const setSelectedItem = selector({
  key: "set_selected_item",
  set: ({set, get}, item) => {
    const menu = get(menuState);

    set(menuState, {
      ...menu,
      selected: item.value
    });
  }
});

const useMutateSelectedItem = () => {
  return useSetRecoilState(setSelectedItem);
}

export default useMutateSelectedItem;
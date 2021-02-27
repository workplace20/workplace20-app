import { useRecoilValue } from 'recoil';
import menuState from '../atoms/menu';

const useQueryMenuItems = () => {
  const { items } = useRecoilValue(menuState);

  return items;
}

export default useQueryMenuItems;
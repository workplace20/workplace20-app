import { useRecoilValue } from 'recoil';
import menuState from '../atoms/menu';

const useQuerySelectedItem = () => {
  const { items, selected } = useRecoilValue(menuState);
  
  return items?.find(x => x.value === selected);
}

export default useQuerySelectedItem;
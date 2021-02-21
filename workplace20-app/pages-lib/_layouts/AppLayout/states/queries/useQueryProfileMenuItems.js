import { useRecoilValue } from 'recoil';
import ProifileMenuState from '../atoms/profileMenu';

const useQueryProfileMenuItems = () => useRecoilValue(ProifileMenuState);

export default useQueryProfileMenuItems;
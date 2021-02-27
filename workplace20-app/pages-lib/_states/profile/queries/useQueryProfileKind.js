import { useQuery } from 'react-query';
import { queryProfileKey } from '../keys';
import getProfile from './getProfile';

const useQueryProfileKind = () => useQuery(queryProfileKey, getProfile, {
  select: data => data?.kind
});

export default useQueryProfileKind;
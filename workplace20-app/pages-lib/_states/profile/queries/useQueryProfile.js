import { useQuery } from 'react-query';
import { queryProfileKey } from '../keys';
import getProfile from './getProfile';

const useQueryProfile = () => useQuery(queryProfileKey, getProfile);

export default useQueryProfile;
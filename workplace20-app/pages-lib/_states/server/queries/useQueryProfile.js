import { useQuery } from 'react-query';
import axiosWrapper from '../axios-wrapper';
import { queryProfileKey } from '../keys';

const getProfile = () => axiosWrapper.get('/profiles');
const useQueryProfile = () => useQuery(queryProfileKey, getProfile);

export default useQueryProfile;
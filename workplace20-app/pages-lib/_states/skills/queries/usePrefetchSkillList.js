
import { useQueryClient } from 'react-query';
import axiosWrapper from '../../axios-wrapper';
import { querySkillListKey } from '../keys';

const getSkillList = () => axiosWrapper.get('/skills');

const usePrefetchSkillList = () => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(querySkillListKey, getSkillList);
}

export default usePrefetchSkillList;
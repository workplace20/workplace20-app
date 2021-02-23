
import { useQueryClient } from 'react-query';
import { querySkillListKey } from '../keys';
import getSkillList from './getSkillList';

const usePrefetchSkillList = () => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(querySkillListKey, getSkillList);
}

export default usePrefetchSkillList;
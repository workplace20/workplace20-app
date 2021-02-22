import { querySkillListKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQuerySkillList = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(querySkillListKey)?.skills;
}


export default useQuerySkillList;

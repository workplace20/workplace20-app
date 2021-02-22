import { querySkillListKey } from '../keys';
import { useQueryClient } from 'react-query';

const useQuerySkillLevelList = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(querySkillListKey)?.levels;
}


export default useQuerySkillLevelList;

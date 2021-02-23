import { querySkillListKey } from '../keys';
import { useQuery } from 'react-query';
import getSkillList from './getSkillList';

const useQuerySkillLevelList = () => useQuery(querySkillListKey, getSkillList, {
  select: data => data?.levels
});

export default useQuerySkillLevelList;

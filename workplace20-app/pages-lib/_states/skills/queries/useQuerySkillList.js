import { querySkillListKey } from '../keys';
import { useQuery } from 'react-query';
import getSkillList from './getSkillList';

const useQuerySkillList = () => useQuery(querySkillListKey, getSkillList, {
  select: data => data?.skills
});


export default useQuerySkillList;

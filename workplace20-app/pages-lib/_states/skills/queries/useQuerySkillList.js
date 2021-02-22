import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { querySkillListKey } from '../keys';
import { useQuery } from 'react-query';

const getSkillList = () => axiosWrapper.get('/skills');
const useQuerySkillList = () => useQuery(querySkillListKey, getSkillList);

export default useQuerySkillList;

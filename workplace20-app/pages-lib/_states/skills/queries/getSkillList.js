import axiosWrapper from '../../axios-wrapper';

const getSkillList = () => axiosWrapper.get('/skills');

export default getSkillList;
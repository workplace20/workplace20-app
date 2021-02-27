import axiosWrapper from '../../axios-wrapper';

const getProfile = () => axiosWrapper.get('/profiles');

export default getProfile;
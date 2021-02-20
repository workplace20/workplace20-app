import axios from 'axios';

const axiosWrapper = axios.create({
  baseURL: '/api',
});

axiosWrapper.interceptors.response.use(
  response => response && response.data
);

export default axiosWrapper;
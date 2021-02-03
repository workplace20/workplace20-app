import axios from 'axios';

const axiosWrapper = axios.create({
  baseURL: 'http://localhost:3000/api',
});

axiosWrapper.interceptors.response.use(
  response => response && response.data
);

export default axiosWrapper;
import axios from 'axios';

const axiosWrapper = axios.create({
  baseURL: `${process.env.API_URL}/api`,
});

axiosWrapper.interceptors.response.use(
  response => response && response.data
);

export default axiosWrapper;
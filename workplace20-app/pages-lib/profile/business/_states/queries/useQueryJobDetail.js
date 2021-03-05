
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { useQuery } from 'react-query';
import { queryJobDetailKey } from '../keys';

const getJobDetail = ({ queryKey: [key, id] }) => axiosWrapper.get(`/profiles/jobs/${id}`);
const useQueryJobDetail = (id) => useQuery([queryJobDetailKey, id], getJobDetail);

export default useQueryJobDetail;
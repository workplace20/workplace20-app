
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { useInfiniteQuery } from 'react-query';
import { queryJobListKey } from '../keys';

const getJobs = ({ pageParam = 0, queryKey: [key, type] }) => axiosWrapper.get(`profiles/jobs?cursor=${pageParam}&type=${type}`);

const useQueryJobs = (type) => useInfiniteQuery(
  [queryJobListKey, type],
  getJobs,
  {
    getNextPageParam: lastPage => lastPage.nextCursor ?? false,
  }
)


export default useQueryJobs;
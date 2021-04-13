import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { queryJobDetailKey } from '../keys';

const addJob = (newJob) => axiosWrapper.post('/profiles/jobs', newJob);

const useMuateAddJob = (onSuccess) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(addJob, {
    onSuccess: (data) => {
      queryClient.setQueryData([queryJobDetailKey, data.id], data);
      onSuccess();
    }
  })
};

export default useMuateAddJob;
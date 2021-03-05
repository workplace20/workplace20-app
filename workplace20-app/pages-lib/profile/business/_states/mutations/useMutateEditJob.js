import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { queryJobDetailKey } from '../keys';

const editJob = (job) => axiosWrapper.put(`/profiles/jobs/${job.id}`, job);

const useMuateEditJob = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(editJob, {
    onSuccess: (data) => {
      if (data && data.id)  {
        queryClient.setQueryData([queryJobDetailKey, data.id], data);
        router.push(`/profile/jobs/${data.id}`)
      } else {
        router.push('/profile/jobs')
      }
    }
  })
};

export default useMuateEditJob;
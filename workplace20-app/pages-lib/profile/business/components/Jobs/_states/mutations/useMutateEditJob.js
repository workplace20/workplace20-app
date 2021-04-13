import { useMutation, useQueryClient } from 'react-query';
import axiosWrapper from 'pages-lib/_states/axios-wrapper';
import { queryJobDetailKey } from '../keys';

const editJob = (job) => axiosWrapper.put(`/profiles/jobs/${job.id}`, job);

const useMuateEditJob = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation(editJob, {
    onSuccess: (data) => {
      queryClient.setQueryData([queryJobDetailKey, data.id], data);
      onSuccess(data?.id);
    }
  })
};

export default useMuateEditJob;
import { useMutation, useQueryClient } from 'react-query';
import axiosWrapper from '../axios-wrapper';
import { queryProfileKey } from '../keys';

const updateProfileKind = (userKind) => axiosWrapper.put('/profiles', { kind: userKind });

const useMutateProfileKind = (successCallback) => {
  const queryClient = useQueryClient();

  return useMutation(updateProfileKind, {
    onSuccess: (data) => {
      queryClient.setQueryData(queryProfileKey, data);
      successCallback();
    }
  })
};

export default useMutateProfileKind;
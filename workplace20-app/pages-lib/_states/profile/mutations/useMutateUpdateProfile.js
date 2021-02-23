import { useMutation, useQueryClient } from 'react-query';
import axiosWrapper from '../../axios-wrapper';
import { queryProfileKey } from '../keys';

const updateProfile = (profile) => axiosWrapper.put('/profiles', profile);

const useMutateUpdateProfile = (successCallback) => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    onSuccess: (data) => {
      queryClient.setQueryData(queryProfileKey, data);
      successCallback();
    }
  })
};

export default useMutateUpdateProfile;
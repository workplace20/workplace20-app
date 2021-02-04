import { useQuery, useMutation, useQueryClient } from 'react-query';
import axiosWrapper from './axios-wrapper';

const queryProfileKey = 'my_profile';

const getProfile = () => axiosWrapper.get('/profiles');
const updateProfileKind = (userKind) => axiosWrapper.put('/profiles', { kind: userKind });

export const useQueryProfile = () => useQuery(queryProfileKey, getProfile);

export const useMutateProfileKind = (successCallback) => {
  const queryClient = useQueryClient();

  return useMutation(updateProfileKind, {
    onSuccess: (data) => {
      queryClient.setQueryData(queryProfileKey, data);
      successCallback();
    }
  })
};
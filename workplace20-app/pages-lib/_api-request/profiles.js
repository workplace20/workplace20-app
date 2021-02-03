import axiosWrapper from './axios-wrapper';

const ProfileRequest = {
  getProfile: () => axiosWrapper.get('/profiles'),
  updateProfile: (content) => axiosWrapper.put('/profiles', content)
}

export default ProfileRequest;
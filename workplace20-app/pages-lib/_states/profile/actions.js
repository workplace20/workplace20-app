import ProfileState from './index';
import { selector } from 'recoil';

export const updateProfile = selector({
  key: "update_profile",
  set: ({set}, newProfile) => {
    set(ProfileState, newProfile);
  }
});
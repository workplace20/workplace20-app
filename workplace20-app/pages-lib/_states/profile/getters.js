import { selector } from 'recoil';

export const ProfileQuerry = selector({
  key: "profile_information",
  get: async () => {
    debugger
    const res = await fetch('http://localhost:3000/api/profiles');
    const json = await res.json();
    debugger
    return json;
  }
});
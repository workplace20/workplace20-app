import { atom } from 'recoil';

export default atom({
  key: "profile_menu_state",
  default: [
    {
      name: 'Profile',
      path: '/home',
    },
    {
      name: 'Settings',
      path: '/home',
    },
    {
      name: 'Sign out',
      path: '/api/auth/signout',
    }
  ]
});

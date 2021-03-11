import { atom } from 'recoil';

export default atom({
  key: "marketing_profile_menu_state",
  default: [
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Sign out',
      path: '/api/auth/signout',
    }
  ]
});

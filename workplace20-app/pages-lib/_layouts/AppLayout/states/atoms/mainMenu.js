import { atom } from 'recoil';

export default atom({
  key: "main_menu_state",
  default: [
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Jobs',
      path: '/jobs',
    },
    {
      name: 'Community',
      path: '/blog',
    }
  ]
});

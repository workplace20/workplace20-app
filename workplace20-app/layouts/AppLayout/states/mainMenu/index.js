import { atom } from 'recoil';

export default atom({
  key: "main_menu_state",
  default: [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Profile & Skills',
      path: '/profileandskills',
    },
    {
      name: 'Employment History',
      path: '/history',
    },
    {
      name: 'Networks',
      path: '/networks',
    }
  ]
});

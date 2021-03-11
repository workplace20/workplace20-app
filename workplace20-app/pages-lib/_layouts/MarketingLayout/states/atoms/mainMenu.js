import { atom } from 'recoil';

export default atom({
  key: "marketing_menu_state",
  default: [
    {
      name: 'For Developers',
      path: '/#for-engineer',
    },
    {
      name: 'For Business',
      path: '/#for-business',
    },
    {
      name: 'Jobs',
      path: '/jobs',
    },
    {
      name: 'Community',
      path: '/community',
    }
  ]
});

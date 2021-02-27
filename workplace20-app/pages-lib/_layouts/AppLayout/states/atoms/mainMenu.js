import { PROFILE_KIND } from 'pages-lib/_utils/constants';

import { atom } from 'recoil';

export default atom({
  key: "main_menu_state",
  default: {
    [PROFILE_KIND.creator]: [
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
    ],
    [PROFILE_KIND.business]: [
      {
        name: 'Profile',
        path: '/profile',
      },
      {
        name: 'Community',
        path: '/blog',
      }
    ]
  }
});

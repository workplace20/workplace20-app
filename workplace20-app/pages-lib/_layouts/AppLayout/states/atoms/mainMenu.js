import { PROFILE_KIND } from 'pages-lib/_utils/constants';
import { atom } from 'recoil';

export default atom({
  key: "main_menu_state",
  default: {
    [PROFILE_KIND.creator]: [
      {
        name: 'Home',
        path: '/',
        isSelected: (pathName) => pathName === '/'
      },
      {
        name: 'Profile',
        path: '/profile',
        isSelected: (pathName) => pathName === '/profile'
      },
      {
        name: 'Jobs',
        path: '/jobs/me',
        isSelected: (pathName) => pathName.startsWith('/jobs')
      },
      {
        name: 'Community',
        path: '/community',
        isSelected: (pathName) => pathName.startsWith('/community')
      }
    ],
    [PROFILE_KIND.business]: [
      {
        name: 'Home',
        path: '/',
        isSelected: (pathName) => pathName === '/'
      },
      {
        name: 'Profile',
        path: '/profile',
        isSelected: (pathName) => pathName === '/profile'
      },
      {
        name: 'Community',
        path: '/community',
        isSelected: (pathName) => pathName.startsWith('/community')
      }
    ]
  }
});

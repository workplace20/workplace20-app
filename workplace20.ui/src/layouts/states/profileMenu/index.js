import { atom } from 'recoil';
import ProfileAndSkillsPage from '@/pages/profileAndSkills';

export default atom({
  key: "profile_menu_state",
  default: [
    {
      name: 'Profile',
      path: '/profile',
      component: (ProfileAndSkillsPage)
    },
    {
      name: 'Settings',
      path: '/settings',
      component: (ProfileAndSkillsPage)
    },
    {
      name: 'Sign out',
      path: '/signout',
      component: (ProfileAndSkillsPage)
    }
  ]
});

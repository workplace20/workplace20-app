import { atom } from 'recoil';
import DashboardPage from '@/pages/dashboard';
import ProfileAndSkillsPage from '@/pages/profileAndSkills';
import EmploymentHistoryPage from '@/pages/employmentHistory';
import NetworksPage from '@/pages/networks';

export default atom({
  key: "main_menu_state",
  default: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: (DashboardPage)
    },
    {
      name: 'Profile & Skills',
      path: '/profileandskills',
      component: (ProfileAndSkillsPage)
    },
    {
      name: 'Employment History',
      path: '/history',
      component: (EmploymentHistoryPage)
    },
    {
      name: 'Networks',
      path: '/networks',
      component: (NetworksPage)
    }
  ]
});

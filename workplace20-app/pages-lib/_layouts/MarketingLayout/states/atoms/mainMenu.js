import { atom } from "recoil";

export default atom({
	key: "marketing_menu_state",
	default: [
		{
		  name: 'Jobs',
			path: '/jobs',
			authenticatedPath: '/jobs/me'
		},
		{
		  name: 'Community',
			path: '/community',
			authenticatedPath: '/community/me'
		}
	],
});

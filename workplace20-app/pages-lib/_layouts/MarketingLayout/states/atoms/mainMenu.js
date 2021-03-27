import { atom } from "recoil";

export default atom({
	key: "marketing_menu_state",
	default: [
		{
			name: "Hire developers?",
			path: "/hiring",
		},
		// {
		//   name: 'Jobs',
		//   path: '/jobs',
		// },
		// {
		//   name: 'Community',
		//   path: '/community',
		// }
	],
});

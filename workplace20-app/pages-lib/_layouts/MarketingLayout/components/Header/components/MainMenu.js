import classnames from "classnames";
import { useQueryMainMenuItems } from "pages-lib/_layouts/MarketingLayout/states";
import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = () => {
	const menuItems = useQueryMainMenuItems();
	const router = useRouter();
	const isActive = (pathname) => router.pathname.startsWith(pathname);

	return (
		<div className="hidden md:flex md:space-x-10">
			{menuItems.map((item) => (
				<Link href={item.path}>
					<a
						className={classnames({
							"text-xl text-orange-600 font-medium": isActive(
								item.path
							),
							"text-xl font-medium text-gray-500 hover:text-gray-900": !isActive(
								item.path
							),
						})}
					>
						{item.name}
					</a>
				</Link>
			))}
		</div>
	);
};

export default MainMenu;

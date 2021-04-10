import classnames from "classnames";
import { useQueryProfileKind } from "pages-lib/_states";
import { useQueryMainMenuItems } from "pages-lib/_layouts/AppLayout/states";
import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = () => {
	const { data: profileKind } = useQueryProfileKind();
	const menuItems = useQueryMainMenuItems(profileKind);
	const router = useRouter();

	return (
		<div className="hidden lg:block">
			<nav className="flex space-x-4">
				{menuItems.map((item) => (
					<Link href={item.path}>
						<a
							className={classnames(
								"font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10",
								{
									"text-white font-extrabold": item.isSelected(
										router.pathname
									),
									"text-orange-200": !item.isSelected(
										router.pathname
									),
								}
							)}
						>
							{item.name}
						</a>
					</Link>
				))}
			</nav>
		</div>
	);
};

export default MainMenu;

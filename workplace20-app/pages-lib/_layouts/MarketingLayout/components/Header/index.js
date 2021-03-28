import classnames from "classnames";
import Head from "next/head";
import { Fragment } from "react";
import Link from "next/link";
import { Logo } from "pages-lib/_components/controls";
import { useRouter } from "next/router";
import {
	MainMenu,
	MobileMenuButton,
	MobileMenu,
	ProfileMenu,
} from "./components";

const Header = () => {
	const router = useRouter();

	const isBusinessPage = router.pathname === '/hiring';

	const landingPageLink = isBusinessPage ? '/' : '/hiring';
	const landingPageTitle = isBusinessPage ? 'Apply as a developer?' : 'Hire developers?';

	return (
		<>
			<Head>
				<title>
					Workspace20 - .Net & React.js developer community in Viet
					Nam
				</title>
				<link rel="icon" href="/favicon.ico" />
				<Fragment>
					{/* Google Tag */}

					<script
						dangerouslySetInnerHTML={{
							__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PKB227P');
            `,
						}}
					/>
					{/* Google Tag */}
				</Fragment>
				<Fragment>
					<script
						id="mcjs"
						dangerouslySetInnerHTML={{
							__html: `
																								!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c4d577219c0dd969db452d25b/9c8b3fc6b38fecd3f6df1cc32.js");											                  `,
						}}
					/>
				</Fragment>
			</Head>
			{/* Google Tag */}
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-PKB227P"
					height={0}
					width={0}
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
			</noscript>
			<div class="relative py-6 bg-white">
				<div class="max-w-7xl mx-auto px-4 sm:px-6">
					<nav
						class="relative flex items-center justify-between sm:h-10 md:justify-center"
						aria-label="Global"
					>
						<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
							<div class="flex items-center justify-between w-full md:w-auto">
								<div>
									<div className="flex md:items-center md:space-x-10">
										<div>
											<Link href="/">
												<a>
													<Logo />
												</a>
											</Link>
										</div>
										<div className="hidden md:block">
											<Link href={landingPageLink}>
												<a
													className="font-medium text-gray-500 hover:text-gray-900"
												>
													{landingPageTitle}
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div class="mr-2 flex items-center md:hidden">
									<MobileMenuButton />
								</div>
							</div>
						</div>
						<div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 md:space-x-10">
							<MainMenu />
							<ProfileMenu />
						</div>
					</nav>
				</div>
			</div>
			<MobileMenu />
		</>
	);
};

export default Header;

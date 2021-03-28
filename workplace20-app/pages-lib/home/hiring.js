import { withMarketingLayout } from "pages-lib/_layouts";

const Home = () => (
	<div className="bg-white">
		<div>
			<div class="flex mx-auto max-w-7xl px-4 pt-8 sm:pt-8 pb-16">
				<div class="flex-initial text-center leading-16 w-1/2">
					<h1 class="bg-clip-text text-transparent bg-gradient-to-l from-orange-600 to-orange-400 sm:text-6xl font-black text-orange-600 text-6xl pt-24">
						<span class="block xl:inline">
							Hiring your next .NET & React.js
						</span>
					</h1>
				</div>
				<div class="flex-initial ml-24">
					<img class="text-center" src="./assets/bg/hiring.png" />
				</div>
			</div>
		</div>
		<div class="relative bg-white ">
			<div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 class="text-4xl font-semibold tracking-wider text-orange-600 uppercase">
					Our Services
				</h2>
				<div class="mt-12">
					<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div class="pt-6">
							<div class="h-44 flow-root rounded-lg px-6 pb-8 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-500 ">
								<div class="-mt-6">
									<h3 class="uppercase mt-8 text-lg font-bold text-white tracking-tight">
										Match the next developer.
									</h3>
									<p class="mt-5 text-base text-white">
										We learn about your tech and connect you
										to the best match developers from our
										community.
									</p>
								</div>
							</div>
						</div>

						<div class="pt-6 ">
							<div class="h-44 flow-root rounded-lg px-6 pb-8 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-500 ">
								<div class="-mt-6">
									<h3 class="uppercase mt-8 text-lg font-bold text-white tracking-tight">
										Legal Representatives on your behalf.
									</h3>
									<p class="mt-5 text-base text-white">
										On behalf of your business, we sign the
										contract with the developer based on
										Viet Nam's labour law.
									</p>
								</div>
							</div>
						</div>
						<div class="pt-6">
							<div class="h-44 flow-root rounded-lg px-6 pb-8 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-500 ">
								<div class="-mt-6">
									<h3 class="uppercase mt-8 text-lg font-bold text-white tracking-tight">
										Build your development team.
									</h3>
									<p class="mt-5 text-base text-white">
										We build the development team to deliver
										the software, you focus on product
										development.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="relative bg-white mt-24">
			<div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<div class="mt-12">
					<div class="bg-white">
						<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
							<h2 class="text-3xl font-extrabold tracking-tight text-orange-600 sm:text-4xl">
								<span class="block">Ready to dive in?</span>
							</h2>
							<div class="mt-8 flex justify-center">
								<div class="inline-flex rounded-md shadow">
									<a
										href="/api/auth/signin"
										class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
									>
										Get started
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default withMarketingLayout(Home);

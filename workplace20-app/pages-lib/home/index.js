import { withMarketingLayout } from "pages-lib/_layouts";

const Home = () => (
	<div className="bg-white">
		<div>
			<div class="flex flex-col mx-auto max-w-7xl px-4 md:pt-8 pb-16 md:flex-row">
				<div class="flex-initial text-center leading-16 w-1/2">
					<h1 class="font-black text-orange-600 text-6xl">
						<span class="block xl:inline">.NET & React.js</span>
					</h1>
					<p class="bg-clip-text text-transparent bg-gradient-to-l from-orange-600 to-orange-400 text-2xl md:text-6xl pt-8">
						developer community in Viet Nam
					</p>
				</div>
				<div class="flex-initial ml-24">
					<img class="text-center" src="./assets/bg/vietnam.png" />
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden">
			<div class="relative ">
				<div class="relative pt-12 md:pb-16 px-4 ">
					<div class="text-base max-w-6xl mx-auto ">
						<h2
							id="how-we-work"
							class="text-3xl leading-8 font-extrabold tracking-tight text-orange-500 sm:text-4xl"
						>
							Founder's story
						</h2>

						<div class="flex flex-col md:flex-row">
							<div class="flex-1 pr-6 pt-12 flex-6 pb-12 leading-8 text-xl">
								<p>
									At the end of 2019, I have joined a FinTech
									startup that has no office in Viet Nam. We
									had the plan to build the office in Viet Nam
									without know that the pandemic was coming.
									Early in 2020, Viet Nam had started social
									distance to prevent the spread of
									coronavirus, there were no changes to come
									to the office to work.
								</p>
								<p class="pt-5">
									Our journey for remote work began. We
									started working remotely for the whole team.
									Besides that, we started to hire more
									developers to join our team, of course,
									completely remote. Our personal lifestyle
									changed, we have started to burnout,
									stressed.
								</p>
								<p class="pt-5">
									However, it's not our end. We started to
									learn how to build trust, avoid burnout and
									transparent about the work between the team.
									Only hire the developers from our network
									who match our culture instead of asking the
									headhunting. We have adopted the agile
									manifesto, mob programming (remotely),
									continues to ship our feature to production.
									We don't do daily meeting but we always have
									an online call every day. We don't have a
									retrospective meeting end of the sprint, but
									we have a lesson-learn for every problem we
									have.
								</p>
								<p class="pt-5">
									By now, remote work helps us the freedom to
									work, choose the place we want to live. Sai
									Gon is too crowd. So why not build the
									community to connect talent to work
									remotely?
								</p>
							</div>

							<div class="hidden lg:inline-flex flex-1">
								<div class="">
									<img
										class=" md:w-full md:h-1/2 md:h-1/2 md:object-cover"
										src="https://images.unsplash.com/photo-1578768124932-e0cc82f7a37e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=666&q=80"
									/>
								</div>
							</div>
						</div>
						<p class="mt-8 text-lg text-gray-500"></p>
					</div>
				</div>
			</div>
			<div class="relative bg-white">
				<div class="relative px-4 ">
					<div class="ax-w-4xl mx-auto">
						<h2 class="font-black text-4xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-l from-orange-400 to-orange-600">
							Build by developers, for developers
						</h2>
						<p class="py-6 font-black bg-clip-text text-transparent bg-gradient-to-l from-orange-300 to-orange-600 text-xl md:text-4xl">
							The challenges when looking for a remote job
						</p>
					</div>
				</div>
				<div class="mt-16">
					<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
						<div class="flex flex-col">
							<div class="flex-initial max-w-6xl">
								<h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
									No Trust.
								</h2>
								<p class="mt-6 max-w-3xl text-xl leading-8 text-gray-700">
									As remote work is only work in a trusted
									environment, People don't know who you are,
									they need you to prove that you can do the
									job, this leads to lots of interview
									session. And when they hire you, they're
									making a bet on you.
								</p>
							</div>
							<div class="flex-initial">
								<img src="./assets/bg/trust.png" />
							</div>
						</div>
					</div>
					<div class="mt-16 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
						<div class="flex flex-col">
							<div class="flex-initial">
								<h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
									Culture fit.
								</h2>
								<p class="mt-6 max-w-3xl text-xl leading-8 text-gray-700">
									Look at this
									<a
										class="pl-1 pr-1 text-orange-600"
										href="https://neilonsoftware.com/difficult-people-on-software-projects/"
									>
										https://neilonsoftware.com/difficult-people-on-software-projects.
									</a>
									It's not about your coding skills at all.
									People want to work with engineers who
									like-mind, so together, they can collaborate
									to ship the software product.
								</p>
							</div>
							<div class="flex-initial">
								<img src="./assets/bg/culture.png" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="relative pt-32 bg-white">
				<div class="relative px-4 ">
					<div class="ax-w-4xl mx-auto ">
						<h2 class="font-black text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-l from-orange-400 to-orange-600">
							Join Us,
						</h2>
						<p class="py-6 font-black bg-clip-text text-transparent bg-gradient-to-l from-orange-300 to-orange-600 text-xl md:text-4xl">
							Be the part of .NET and React.js Developer in Viet
							Nam
						</p>
					</div>
				</div>
				<div class="mt-16">
					<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
						<div class="flex flex-col">
							<div class="flex-initial max-w-6xl pb-12 lg:pr-20">
								<h2 class="font-extrabold text-gray-700 tracking-tight text-4xl">
									1. Register an account and take our
									challenges
								</h2>
								<p class="mt-6 max-w-3xl text-xl leading-8 text-gray-600">
									We designed our challenge to understand your
									skill and hands-on experience by using the
									real challenge as a software engineer like
									design a feature, doing code review,
									refactoring code, write test. We don't ask
									you the theory questions.
								</p>
							</div>
							<div class="flex-initial">
								<h2 class="font-extrabold text-gray-700 tracking-tight text-4xl">
									2. Learn, share and ready for your next
									remote job.
								</h2>
								<p class="mt-6 max-w-3xl text-xl leading-8 text-gray-700">
									We build a high-quality community in .NET
									and React.js with deep-dive technical docs,
									you can learn from them as well as share
									your writeup to the community, get
									reputation and trust. Be ready and connect
									with people for your next remote job.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-white">
				<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					<h2 class="font-extrabold tracking-tight text-gray-700 ">
						<span class="block text-4xl sm:text-4xl">Ready?</span>
					</h2>
					<div class="mt-8 flex justify-center">
						<div class="inline-flex rounded-md shadow">
							<a
								href="/api/auth/signin"
								class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
							>
								Click to Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default withMarketingLayout(Home);

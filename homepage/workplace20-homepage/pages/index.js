import Head from 'next/head'
import Layout from '../components/layout'
import Logo from '../components/home-logo'
export default function Home() {
  return (
	<Layout>
    <div>
      <Head>
        <title>Workspace20 - A private community for creators as software engineer and business which offer remote work environment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<div class="relative bg-gray-50 overflow-hidden">

				<div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
								<div class="relative h-full max-w-7xl mx-auto">
									<svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
										<defs>
											<pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
												<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
											</pattern>
										</defs>
										<rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
									</svg>
									<svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
										<defs>
											<pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
												<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
											</pattern>
										</defs>
										<rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
									</svg>
								</div>
							</div>
		<div class="relative pt-6 pb-16 sm:pb-24">
							<div class="max-w-7xl mx-auto px-4 sm:px-6">
								<nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">

									<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
										<div class="flex items-center justify-between w-full md:w-auto">
											<Logo/>
											<div class="-mr-2 flex items-center md:hidden">
												<button type="button" class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" id="main-menu" aria-haspopup="true">
													<span class="sr-only">Open main menu</span>
												</button>
											</div>
										</div>
									</div>
									<div class="hidden md:flex md:space-x-10">
										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">How  we work?</a>

										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">For Creator</a>

										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">For Business</a>

										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Blog</a>
										<a href="#" class="font-medium text-gray-500 hover:text-gray-900"></a>
									</div>
									<div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
										<span class="inline-flex rounded-md shadow">
											<a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50">
												Log in
											</a>
										</span>
									</div>
								</nav>
							</div>
							<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
								<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div class="px-5 pt-4 flex items-center justify-between">
										<div>
											<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-orange-600.svg" alt=""/>
										</div>
										<div class="-mr-2">
											<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
												<span class="sr-only">Close menu</span>
												<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
										</div>
									</div>
									<div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
										<div class="px-2 pt-2 pb-3" role="none">
											<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">How we work?</a>

											<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">For Creator</a>

											<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">For Business</a>
											<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Blog</a>
										</div>
										<div role="none">
											<a href="#" class="block w-full px-5 py-3 text-center font-medium text-orange-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
												Log in
											</a>
										</div>
									</div>
								</div>
							</div>

							<main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
								<div class="text-center">
									<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
										<span class="block xl:inline">The future of work</span>
									</h1>
									<p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
		2020 has changed our work place and working in 
		the office is an optional. Workplace20 is private community of sofware engineers and sofware product business
									</p>
								</div>
							</main>
						</div>
					</div>
				<div class="relative bg-white">
					<div class="relative pt-12 pb-16 px-4 ">
							<div class="text-base max-w-4xl mx-auto ">
								<h3 class="text-3xl pb-16 leading-8 font-extrabold tracking-tight text-orange-500 sm:text-4xl">How we work?</h3>

								<div class="flex">
										<svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
										</svg>
										<div class="ml-3">
											<dt class="text-lg leading-6 font-medium text-gray-900">
												For the creators
											</dt>
											<dd class="mt-2 text-base text-gray-500">
												As remote work only “worked” in trusted environment. 
												The creators on Workplace20 are invited only by trusted people who 
												showing what they can working on and their skill set. By only invited people, 
												we make sure that our creator is selective and higt skill.
											</dd>
										</div>
								</div>
								<div class="flex pt-12">
										<svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
										</svg>
										<div class="ml-3">
											<dt class="text-lg leading-6 font-medium text-gray-900">
												For the business
											</dt>
											<dd class="mt-2 text-base text-gray-500">
												The business on workplace20 offer remote work and a culture to help creator to
												ship the software. Only pay based on hourly rate or service based.
											</dd>
										</div>
								</div>
								<p class="mt-8 text-lg text-gray-500"></p>
							</div>
					</div>
				</div>
		
				<div class="relative bg-white">
					<div class="relative px-4 ">
							<div class="text-base max-w-4xl mx-auto ">
								<h3 class="text-3xl leading-8 font-extrabold tracking-tight text-orange-500 sm:text-4xl">What we are offer?</h3>
							</div>
					</div>
					<div class="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
						<h2 class="text-3xl font-extrabold text-gray">
							For Creators
						</h2>
						<div class="mt-2 border-t border-opacity-25 pt-10">
							<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-4 md:gap-y-6">
								<div>
									<dt class="text-lg font-medium text-gray">
									✨ A community of business who provides the remote work, flexible of culture and
									innovative product
									</dt>
								</div>
								<div>
									<dt class="text-lg font-medium text-grey">
									✨ You as creator working as partnership with the business. No full-time employee so 
									you have the flexible to growth and balance your life.
									</dt>
								</div>

								<div>
									<dt class="text-lg leading-6 font-medium text-gray">
									 ✨ As creator, you are focus on your software product development, hassle free of politics, 
									heavily process and multi level of management.
									</dt>
								</div>

								<div>
									<dt class="text-lg leading-6 font-medium text-gray">
									✨ Pay at your skill level not where you live.
									</dt>
								</div>
							</dl>
							<div class="bg-white">
								<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
									<h2 class="font-extrabold tracking-tight text-gray-700 ">
										<span class="block text-3xl sm:text-4xl">Ready to dive in?</span>
										<span class="block text-xl">Request an invite code now</span>
									</h2>
									<div class="mt-8 flex justify-center">
										<div class="inline-flex rounded-md shadow">
											<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
												Get started
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-4xl mx-auto">
							<h2 class="text-3xl font-extrabold text-gray">
								For Business
							</h2>
							<div class="mt-2 border-t border-opacity-25 pt-10">
								<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-4 md:gap-y-6">
									<div>
										<dt class="text-lg font-medium text-gray">
										✨ A selective of creators in community built on trust. They can do what they say, no cheat in level of creator.
										</dt>
									</div>
									<div>
										<dt class="text-lg font-medium text-grey">
										 ✨ Our creator as your business partner, treating them like that so they can high focus on the.
										Building software product instead of other things like office rules, approval process, paper work.
										</dt>
									</div>

									<div>
										<dt class="text-lg leading-6 font-medium text-gray">
										✨ Transparent as you pay them directly.
										</dt>
									</div>

									<div>
										<dt class="text-lg leading-6 font-medium text-gray">
										✨ Reduce the cost of trust as no office, assets cost anymore.
										</dt>
									</div>
		
									<div>
										<dt class="text-lg leading-6 font-medium text-gray">
											✨ We secure the work creator has done and all creator signed the Non-disclose aggrements.
										</dt>
									</div>
									<div class="bg-white">
											<div class="max-w-7xl mx-auto sm:px-6 lg:py-8 lg:px-2">
												<h2 class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
													Get in touch?
												</h2>
												<p class="inline text-3xl font-extrabold tracking-tight text-orange-600 sm:block sm:text-xl px-1">Give us your business email, we will get back to you.</p>
												<form class="mt-8 sm:flex">
													<label htmlFor="emailAddress" class="sr-only">Email address</label>
													<input id="emailAddress" name="email" type="email" autoComplete="email" required class="w-full px-5 py-3 border-2 border-gray-200 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500 sm:max-w-xs rounded-md" placeholder="Enter your email"/>
													<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
														<button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
															Submit
														</button>
													</div>
												</form>
											</div>
										</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-white">
					<div class="max-w-7xl mx-auto px-4 m:px-6 lg:px-8">
						<div class="px-4 py-6 bg-orange-500 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
							<div class="xl:w-0 xl:flex-1">
								<h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
									Want products news and updates?
								</h2>
								<p class="mt-3 max-w-3xl text-lg leading-6 text-orange-200">
									Sign up for our newsletter to stay up to date.
								</p>
							</div>
							<div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
								<form class="sm:flex">
									<label htmlFor="emailAddress" class="sr-only">Email address</label>
									<input id="emailAddress" name="emailAddress" type="email" autoComplete="email" required class="w-full px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange focus:ring-orange-600 rounded-md" placeholder="Enter your email"/>
									<button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-grey bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-600 focus:ring-orange-600 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
										Notify me
									</button>
								</form>
								<p class="mt-3 text-sm text-orange-200">
									We care about the protection of your data. Read our 
									<a href="#" class="px-1 text-white font-medium underline">
										 Privacy Policy.
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
      <footer>
				 <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
						<div class="max-w-8xl mx-auto mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
							<div class="flex space-x-6 md:order-2">
								<a href="#" class="text-gray-400 hover:text-gray-500">
									<span class="sr-only">Twitter</span>
									<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>

								<a href="#" class="text-gray-400 hover:text-gray-500">
									<span class="sr-only">GitHub</span>
									<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
									</svg>
								</a>
							</div>
							<p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
								&copy; 2020 Workplace20, Inc. All rights reserved.
							</p>
						</div>
				</div>
      </footer>
    </div>
  </Layout>
  )
}

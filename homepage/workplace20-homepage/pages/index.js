import Head from 'next/head'
import Layout from '../components/layout'
export default function Home() {
  return (
	<Layout>
    <div>
      <Head>
        <title>Workspace20 - A private community for software engineer and business which offer remote work environment</title>
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
											<a href="#">
												<span class="sr-only">Workflow</span>
												<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
											</a>
											<div class="-mr-2 flex items-center md:hidden">
												<button type="button" class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
													<span class="sr-only">Open main menu</span>
													<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div class="hidden md:flex md:space-x-10">
										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">How  we work?</a>

										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">For Creator</a>

										<a href="#" class="font-medium text-gray-500 hover:text-gray-900">For Business</a>

										<a href="#" class="font-medium text-gray-500 hover:text-gray-900"></a>
									</div>
									<div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
										<span class="inline-flex rounded-md shadow">
											<a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
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
											<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
										</div>
										<div class="-mr-2">
											<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
										</div>
										<div role="none">
											<a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
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
		the office is an optional. Workplace20 is private community of creators and businesses
									</p>
									<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
										<div class="rounded-md shadow">
											<a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
												Get started
											</a>
										</div>
										<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
											<a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
												Live demo
											</a>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				<div class="relative bg-white">
					<div class="relative pt-12 pb-16 px-4 ">
							<div class="text-base max-w-prose mx-auto ">
								<h3 class="text-3xl pb-16 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">How we work?</h3>

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
					<div class="relative pt-12 pb-16 px-4 ">
							<div class="text-base max-w-prose mx-auto ">
								<h3 class="text-3xl pb-16 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Why to join with us?</h3>

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
      <footer>
				<div className="container mx-auto text-center">
					Contact us at paul.k@workplace20.com
				</div>
      </footer>
    </div>
  </Layout>
  )
}

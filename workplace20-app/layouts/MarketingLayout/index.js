import { useState } from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Logo from 'components/Logo';
import { Transition } from '@headlessui/react';

const MarketingLayout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Workspace20 - Developers ready for remote jobs in Viet Nam</title>
        <link rel="icon" href="/favicon.ico" />
        <Fragment>
      {/* Google Tag */}

          <script dangerouslySetInnerHTML={{
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
          <script id="mcjs" dangerouslySetInnerHTML={{
            __html: `
																								!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c4d577219c0dd969db452d25b/9c8b3fc6b38fecd3f6df1cc32.js");											                  `,
          }}
          />
        </Fragment>
      </Head>
      {/* Google Tag */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKB227P" height={0} width={0} style={{display: 'none', visibility: 'hidden'}}></iframe>
      </noscript>
      {/* End google tag */}
      <div class="relative bg-white overflow-hidden">
        <div>
          <div class="relative pt-6 pb-16 sm:pb-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
              <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <Link href="/home">
                      <Logo />
                    </Link>
                    <div class="mr-2 flex items-center md:hidden">
                      <button onClick={() => setIsOpen(!isOpen)} type="button" class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:flex md:space-x-10">
                  <Link href="/home#for-engineer">
                    <a class="font-medium text-gray-500 hover:text-gray-900">For Developers</a>
                  </Link>
                  <Link href="/home#for-business">
                    <a class="font-medium text-gray-500 hover:text-gray-900">For Business</a>
                  </Link>

                  <Link href="/blog">
                    <a class="font-medium text-gray-500 hover:text-gray-900">Blog</a>
                  </Link>
                </div>
                <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span class="inline-flex rounded-md shadow">
                    <Link href="/api/auth/signin" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                      Log in
								    </Link>
                  </span>
                </div>
              </nav>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (

              <div ref={ref} class="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <Logo />
                      </Link>
                    </div>
                    <div class="-mr-2">
                      <button onClick={() => setIsOpen(!isOpen)} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                    <div class="px-2 pt-2 pb-3" role="none">
                      <Link href="/#for-engineer">
                        <a class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">For Developers</a>
                      </Link>
                      <Link href="/#for-business">
                        <a class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">For Business</a>
                      </Link>
                      <Link href="/blog">
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Blog</a>
                      </Link>

                    </div>
                    <div role="none">
                      <a href="https://app.workplace20.com" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                        Log in
										</a>
                    </div>
                  </div>
                </div>
              </div>)}
          </Transition>
        </div>
        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          {children}
        </main>
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
  )
}

export default MarketingLayout;
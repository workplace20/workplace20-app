import { useState } from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import { Logo } from 'pages-lib/_components/controls';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Workspace20 - Build your remote software development team in Viet Nam</title>
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
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKB227P" height={0} width={0} style={{ display: 'none', visibility: 'hidden' }}></iframe>
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
                  <Link href="/#for-engineer">
                    <a class="font-medium text-gray-500 hover:text-gray-900">For Developers</a>
                  </Link>
                  <Link href="/#for-business">
                    <a class="font-medium text-gray-500 hover:text-gray-900">For Business</a>
                  </Link>

                  <Link href="/blog">
                    <a class="font-medium text-gray-500 hover:text-gray-900">Blog</a>
                  </Link>
                </div>
                <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span class="inline-flex rounded-md shadow">
                    <Link href="/api/auth/signin">
                      <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50">
                        Log in
                      </a>
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
                      <Link href="/api/auth/signin">
                        <a className="block w-full px-5 py-3 text-center font-medium text-orange-500 bg-gray-50 hover:bg-gray-100" role="menuitem">
                          Log in
										</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>)}
          </Transition>
        </div>
      </div>
    </>
  )
}

export default Header;
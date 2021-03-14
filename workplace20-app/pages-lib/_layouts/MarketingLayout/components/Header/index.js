import { useState } from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import { Logo } from 'pages-lib/_components/controls';
import {
  MainMenu,
  MobileMenuButton,
  MobileMenu,
  ProfileMenu
} from './components';

const Header = () => {
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
      <div class="relative py-6 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
                <div class="mr-2 flex items-center md:hidden">
                  <MobileMenuButton />
                </div>
              </div>
            </div>
            <MainMenu />
            <ProfileMenu />
          </nav>
        </div>
      </div>
      <MobileMenu />
    </>
  )
}

export default Header;
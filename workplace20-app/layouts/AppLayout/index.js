import Header from './components/Header';
import Footer from './components/Footer';
import Redirect from 'components/Redirect';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import ProfileState from 'pages-lib/_states/profile';

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname === '/quick-start') {
    return <>{children}</>
  } 

  const profile = useRecoilValue(ProfileState);

  if (!profile.kind) return (<Redirect to="/quick-start" />);

  if (router.pathname === '/challenge' || router.pathname === '/') {
    return <>{children}</>
  } 

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="-mt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
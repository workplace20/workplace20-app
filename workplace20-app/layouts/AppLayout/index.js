import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <main className="-mt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {children}
          </div>
        </main>
        {/* <Main /> */}
        <Footer />
      </div>
    </RecoilRoot>
  )
}

export default Layout;
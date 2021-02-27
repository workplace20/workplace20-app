import { usePrefetchSkillList } from 'pages-lib/_states';
import Header from './components/Header';
import Footer from './components/Footer';
import Redirect from 'pages-lib/_components/Redirect';
import { useQueryProfileKind } from 'pages-lib/_states';
import LoadingPage from 'pages-lib/loading';
import Error from 'next/error';

const AppLayout = ({ children }) => {
  usePrefetchSkillList();

  const { isLoading, isError, data: profileKind, error } = useQueryProfileKind();

  if (isLoading) {
    return (<LoadingPage />)
  }

  if (isError) {
    return (<Error statusCode={error.statusCode} />)
  }

  if (!profileKind) return (<Redirect to="/quick-start" />);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="-mt-24 lg:pb-10 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout;
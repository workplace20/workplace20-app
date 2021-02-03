import AppLayout from './AppLayout';
import LoadingPage from 'pages-lib/loading';
import { RecoilRoot } from 'recoil';
import MarketingLayout from './MarketingLayout';
import { useSession } from 'next-auth/client';

const Layout = ({ children }) => {
  const [session, loading] = useSession();
  
  if (loading) return (<LoadingPage />)
  if (!session) { return <MarketingLayout>{children}</MarketingLayout> }

  return (<RecoilRoot><AppLayout>{children}</AppLayout></RecoilRoot>)
}

export default Layout;
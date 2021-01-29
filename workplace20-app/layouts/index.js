import AppLayout from './AppLayout';
import MarketingLayout from './MarketingLayout';
import { useSession } from 'next-auth/client';

const Layout = ({ children }) => {
  const [session, loading] = useSession();
  
  if (loading) return (
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-100 opacity-75 flex flex-col items-center justify-center">
      <div style={{ borderTopColor: "#3498db" }} className="animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>

    </div>

  )
  if (!session) { return <MarketingLayout>{children}</MarketingLayout> }

  return <AppLayout>{children}</AppLayout>
}

export default Layout;
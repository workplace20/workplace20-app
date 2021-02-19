import AppLayout from './index';
import Redirect from 'pages-lib/_components/Redirect';
import { useSession } from 'next-auth/client';
import LoadingPage from 'pages-lib/loading';
import withAuthSecure from 'pages-lib/_hooks/withAuthSecure';

const withAppLayout = (Component) => withAuthSecure(({ ...props }) => {
  const [session, loading] = useSession();

  if (loading) return (<LoadingPage />);
  if (!session) return (<Redirect to="/api/auth/signin" />);

  return (
    <AppLayout>
      <Component {...props} />
    </AppLayout>
  );
})

export default withAppLayout;
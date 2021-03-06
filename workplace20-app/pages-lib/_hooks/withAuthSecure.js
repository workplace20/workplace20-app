import Redirect from 'pages-lib/_components/Redirect';
import { useSession } from 'next-auth/client';
import LoadingPage from 'pages-lib/loading';

const withAuthSecure = (Component) => ({...props}) => {
  const [session, loading] = useSession();

  if (loading) return (<LoadingPage />);
  if (!session) return (<Redirect to="/api/auth/signin" />);

  return <Component {...props}/>;
}

export default withAuthSecure;
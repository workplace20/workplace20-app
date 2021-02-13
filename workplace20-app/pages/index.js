import Redirect from 'components/Redirect';
import LoadingPage from 'pages-lib/loading';
import { useSession } from 'next-auth/client';

const Home = () => {
  const [session, loading] = useSession();

  if (loading) return (<LoadingPage />);

  if (!session) return (<Redirect to="/home" />);

  return (<Redirect to="/profile" />)
}

export default Home;
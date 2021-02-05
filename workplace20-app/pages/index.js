import Redirect from 'components/Redirect';
import { useSession } from 'next-auth/client';

const Home = () => {
  const [session] = useSession();

  if (!session) return (<Redirect to="/home" />);

  return (<Redirect to="/profile" />)
}

export default Home;
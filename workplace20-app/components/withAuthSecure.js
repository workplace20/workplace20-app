import Redirect from 'components/Redirect';
import { useSession } from 'next-auth/client';

const WithAuthSecure = (Component) => ({...props}) => {
  const [session] = useSession();

  if (!session) return (<Redirect to="/api/auth/signin" />);

  return <Component {...props}/>;
}

export default WithAuthSecure;
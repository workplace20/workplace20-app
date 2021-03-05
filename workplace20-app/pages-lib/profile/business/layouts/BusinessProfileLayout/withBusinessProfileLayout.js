import Redirect from 'pages-lib/_components/Redirect';
import { useQueryProfileKind } from 'pages-lib/_states';
import LoadingPage from 'pages-lib/loading';
import Error from 'next/error';
import { PROFILE_KIND }  from 'pages-lib/_utils/constants'
import BusinessProfileLayout from './index';

const withBusinessProfileLayout = (Component) => ({ ...props }) => {
  const { isLoading, isError, data: profileKind, error } = useQueryProfileKind();

  if (isLoading) {
    return (<LoadingPage />)
  }

  if (isError) {
    return (<Error statusCode={error.statusCode} />)
  }

  if (!profileKind || profileKind !== PROFILE_KIND.business) return (<Redirect to="/api/auth/signin" />);

  return (
    <BusinessProfileLayout>
      <Component {...props} />
    </BusinessProfileLayout>
  );
}

export default withBusinessProfileLayout;
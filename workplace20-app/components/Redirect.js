import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingPage from 'pages-lib/loading';

const Redirect = ({to}) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to])

  return LoadingPage;
}

export default Redirect;
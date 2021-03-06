import TimesUp from 'pages-lib/challenge/times-up';
import { useRouter } from 'next/router'

const TimesUpPage = () => {
  const router = useRouter()
  const { challengeId } = router.query;

  return (<TimesUp challengeId={challengeId}/>)
}

export default TimesUpPage;

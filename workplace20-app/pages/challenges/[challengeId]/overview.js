import Overview from 'pages-lib/challenge/overview';
import { useRouter } from 'next/router'

const ChallengeOverviewPage = () => {
  const router = useRouter()
  const { challengeId } = router.query;

  return (<Overview challengeId={challengeId}/>)
}

export default ChallengeOverviewPage;

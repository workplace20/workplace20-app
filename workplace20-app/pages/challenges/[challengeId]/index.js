
import withAuthSecure from 'components/withAuthSecure';
import Challenge from 'pages-lib/challenge';
import { useRouter } from 'next/router'

const ChallengePage = () => {
  const router = useRouter()
  const { challengeId } = router.query;

  return (<Challenge challengeId={challengeId}/>)
}

export default withAuthSecure(ChallengePage);
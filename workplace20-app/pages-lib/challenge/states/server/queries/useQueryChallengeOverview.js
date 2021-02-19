import axiosWrapper from 'pages-lib/_api-request/axios-wrapper';
import { queryChallengeOverviewKey } from '../keys';
import { useQuery } from 'react-query';

const getChallengeOverview = ({ queryKey: [key, challengeId] }) => axiosWrapper.get(`/challenges/${challengeId}/:overview`);
const useQueryChallengeOverview = (challengeId) => useQuery([queryChallengeOverviewKey, challengeId], getChallengeOverview);

export default useQueryChallengeOverview;

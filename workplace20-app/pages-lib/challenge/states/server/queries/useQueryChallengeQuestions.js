import axiosWrapper from 'pages-lib/_states/server/axios-wrapper';
import { queryChallengeQuestionsKey } from '../keys';
import { useQuery } from 'react-query';

const getChallengeQuestions = ({ queryKey: [key, challengeId] }) => axiosWrapper.get(`/challenges/${challengeId}/questions`);
const useQueryChallengeQuestions = (challengeId) => useQuery([queryChallengeQuestionsKey, challengeId], getChallengeQuestions);

export default useQueryChallengeQuestions;

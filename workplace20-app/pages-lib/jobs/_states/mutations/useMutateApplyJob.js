import { useMutation } from 'react-query';
import axiosWrapper from 'pages-lib/_states/axios-wrapper';

const applyJob = (id) => axiosWrapper.post(`/jobs/${id}/:apply`, {});

const useMuateApplyJob = () =>  useMutation(applyJob);

export default useMuateApplyJob;
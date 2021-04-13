import ReactMarkdown from 'react-markdown';
import { useQueryJobDetail } from 'pages-lib/profile/business/components/Jobs/_states';
import Link from 'next/link';
import useGetSkillName from 'pages-lib/_hooks/useGetSkillName';
import Card from 'pages-lib/_components/card';
import { Button, Chip } from 'pages-lib/_components/controls';
import { H3 } from 'pages-lib/_components/typography';
import { TextField } from 'pages-lib/_components/controls';
import {
  Loading,
  Error
} from './components'
import { useMutateSelectJobList, useMutateSelectEditJob } from 'pages-lib/profile/business/components/Jobs/_states';

const JobDetail = ({
  id
}) => {
  const { data: job, isLoading, isError } = useQueryJobDetail(id);
  const { getSkillName, isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useGetSkillName();
  const selectJobList = useMutateSelectJobList();
  const selectEditJob = useMutateSelectEditJob();

  if (isLoading || isLoadingSkillList) return (<Loading />);
  if (isError || isLoadingSkillListError) return (<Error />);

  const {
    title,
    level,
    english,
    introduction,
    description,
    requiredSkills,
  } = job;

  return (
    <Card>
      <Card.Header>
        <div className="flex items-center">
          <Button
            onClick={() => selectJobList()}
            color="white"
            size="sm"
          >
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <H3 className="ml-4">
            {title}
          </H3>
        </div>
        <Button
          color="primary"
          size="base"
          onClick={() => selectEditJob(id)}
        >
          <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
          </Button>
      </Card.Header>
      <Card.Content>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <TextField
              label="Level"
              value={level}
            />
          </div>
          <div className="sm:col-span-1">
            <TextField
              label="English"
              value={english}
            />
          </div>
          <div className="sm:col-span-2">
            <TextField
              label="Introduction"
              value={introduction}
            />
          </div>
          <div className="sm:col-span-2">
            <TextField>
              <TextField.Content>
                <ReactMarkdown>{description}</ReactMarkdown>
              </TextField.Content>
            </TextField>
          </div>
        </dl>
      </Card.Content>
      <Card.Footer className="space-x-1">
        {
          requiredSkills?.map(skill => (
            <Chip
              value={getSkillName(skill)}
            />
          ))
        }
      </Card.Footer>
    </Card>
  )
}

export default JobDetail;
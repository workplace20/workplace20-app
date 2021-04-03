import { Chip } from 'pages-lib/_components/controls';
import useGetSkillName from 'pages-lib/_hooks/useGetSkillName';

const JobSkillList = ({
  skills
}) => {
  const { getSkillName, isLoading, isError } = useGetSkillName();

  if (isLoading || isError) return null;

  return skills.map(skill => (
    <Chip
      color="secondary"
      value={getSkillName(skill)}
    />
  ))
}

export default JobSkillList;
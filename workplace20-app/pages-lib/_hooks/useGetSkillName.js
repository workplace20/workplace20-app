import { useQuerySkillList } from 'pages-lib/_states';

const useGetSkillName = () => {
  const { data: allSkills = [], ...props } = useQuerySkillList();

  return {
    ...props,
    getSkillName: (code) => allSkills?.find(skill => skill.code === code)?.name
  }
}
  

export default useGetSkillName;
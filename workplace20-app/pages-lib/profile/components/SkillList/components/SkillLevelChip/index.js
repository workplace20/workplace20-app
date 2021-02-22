import { useQuerySkillLevelList } from 'pages-lib/_states';

const SkillLevelChip = ({
  skillLevelName
}) => {
  const allSKillLevel = useQuerySkillLevelList();
  const levelNumber = allSKillLevel?.findIndex(x => x.name === skillLevelName);
  const styles = {
    0: "bg-orange-100 text-orange-800",
    1: "bg-orange-200 text-orange-800",
    2: "bg-orange-300 text-orange-800",
    3: "bg-orange-500 text-white",
    4: "bg-orange-600 text-white"
  };

  return (
    <span class={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${styles[levelNumber]}`}>
      {skillLevelName}
    </span>
  )
}

export default SkillLevelChip;
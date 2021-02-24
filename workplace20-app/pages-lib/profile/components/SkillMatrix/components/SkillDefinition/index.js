import classnames from 'classnames';

const SkillDefinition = ({
  allSkillLevels
}) => {
  const styles = {
    0: "bg-orange-100 text-orange-800",
    1: "bg-orange-200 text-orange-800",
    2: "bg-orange-300 text-orange-800",
    3: "bg-orange-500 text-white",
    4: "bg-orange-600 text-white"
  };

  return (
    <>
      <dt className="text-sm font-medium text-gray-900">Skill Levels</dt>
      <dd className="mt-2 space-x-1">
        {
          allSkillLevels.map(skillLevel => {
            const { name: skillLevelName } = skillLevel;
            const levelNumber = allSkillLevels?.findIndex(x => x.name === skillLevelName);

            return (
              <span className={classnames(
                'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium',
                styles[levelNumber]
              )}>
                {skillLevelName}
              </span>
            )
          })
        }
      </dd>
    </>
  )
}

export default SkillDefinition;
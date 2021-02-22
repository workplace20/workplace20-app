import { useQuerySkillList, useQuerySkillLevelList } from 'pages-lib/_states';
import { useState } from 'react';
import Link from "next/link";
import AddNew from './components/AddNew';
import SkillLevelChip from './components/SkillLevelChip';

const SkillList = ({
  skillMatrix = {}
}) => {
  const allSkills = useQuerySkillList() || [];
  const allSkillLevels = useQuerySkillLevelList() || [];
  const [addingSkill, setAddingSkill] = useState(false);

  const profileSkills = Object.keys(skillMatrix).map(skillCode => {
    const globalSkill = allSkills.find(x => x.code === skillCode);
    const profileSkill = skillMatrix[skillCode];
    const currentLevelIndex = allSkillLevels?.findIndex(x => x.name === profileSkill.level);

    return {
      code: skillCode,
      name: globalSkill?.name,
      level: profileSkill?.level,
      nextLevel: currentLevelIndex < allSkillLevels.length - 1 && allSkillLevels[currentLevelIndex + 1]?.name
    }
  });

  const availableNewSkills = allSkills.filter(x => !Object.keys(skillMatrix).includes(x.code));
  const canAddNewSkill = availableNewSkills && availableNewSkills.length > 0;

  return (
    <section aria-labelledby="recent-hires-title" >
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <div className="flex justify-between items-center border-b border-gray-200 pb-5">
            {
              addingSkill && canAddNewSkill ? (
                <AddNew
                  availableSkills={availableNewSkills}
                  onCancel={() => setAddingSkill(false)}
                />
              ) : (
                  <>
                    <h2 className="text-base font-medium text-gray-900" id="recent-hires-title">Skills</h2>
                    {
                      canAddNewSkill && (
                        <button onClick={() => setAddingSkill(true)} className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
                          Add More
                        </button>
                      )
                    }
                  </>
                )
            }
          </div>
          {
            (profileSkills && (profileSkills.length > 0)) ? (
              <div className="flow-root mt-6 border-b border-gray-200 pb-5">
                <ul className="-my-5 divide-y divide-gray-200">
                  {
                    profileSkills.map(skill => (
                      <li className="py-4" key={skill.code}>
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {skill.name}
                            </p>
                            {
                              skill.nextLevel && (
                                <div className="ml-2 flex-shrink-0 flex">
                                  <div className="flex items-center text-sm text-gray-500 space-x-1">
                                    <div className="text-sm text-gray-500">Upgrade to</div>
                                    <div className="text-sm font-bold text-gray-900">{skill.nextLevel}</div>
                                  </div>
                                </div>
                              )
                            }
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm font-medium text-gray-500">
                                {skill.level}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              {
                                skill.nextLevel && (
                                  <div>
                                    <Link href={`/challenges/${skill.code}`}>
                                      <a className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm leading-5 font-medium rounded-full ">
                                        Take Challenge
                            </a>
                                    </Link>
                                  </div>
                                )
                              }
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ) : (
                <div className="pt-5 border-b border-gray-200 pb-5">
                  <p className="text-base text-gray-500">
                    You can showcase more skills to employers and taking more of our challenges to upgrade your level
            </p>
                </div>
              )
          }



          <div className="pt-5">
            <h2 className="text-sm font-medium text-gray-900" id="recent-hires-title">Skill Levels</h2>
            <div className="mt-2 space-x-1">
              {
                allSkillLevels.map(x => (
                  <SkillLevelChip
                    skillLevelName={x.name}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default SkillList;
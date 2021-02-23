import {
  useQuerySkillList,
  useQuerySkillLevelList,
  useQueryProfile
} from 'pages-lib/_states';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import {
  AddNew,
  SkillDefinition,
  SkillList,
  Loading,
  Error
} from './components';

const SkillMatrix = () => {
  const { data: { skillMatrix = {} } = {}, isLoading: isLoadingProfile, isError: isLoadingProfileError } = useQueryProfile();
  const { data: allSkills = [], isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useQuerySkillList();
  const { data: allSkillLevels = [], isLoading: isLoadingSkillLevelList, isError: isLoadingSkillLevelListError } = useQuerySkillLevelList();

  const [addingSkill, setAddingSkill] = useState(false);

  const profileSkills = Object.keys(skillMatrix).map(skillCode => {
    const globalSkill = allSkills?.find(x => x.code === skillCode);
    const profileSkill = skillMatrix[skillCode];
    const currentLevelIndex = allSkillLevels?.findIndex(x => x.name === profileSkill.level);

    return {
      code: skillCode,
      name: globalSkill?.name,
      level: profileSkill?.level,
      nextLevel: currentLevelIndex < allSkillLevels.length - 1 && allSkillLevels[currentLevelIndex + 1]?.name
    }
  });

  const isLoading = isLoadingProfile || isLoadingSkillList || isLoadingSkillLevelList;
  const isLoadingError = isLoadingProfileError || isLoadingSkillListError || isLoadingSkillLevelListError;

  const isProfileSkillsEmpty = !profileSkills || !profileSkills.length;
  const availableNewSkills = allSkills?.filter(x => !Object.keys(skillMatrix).includes(x.code));
  const canAddNewSkill = availableNewSkills && availableNewSkills.length > 0;

  return (
    <section aria-labelledby="recent-hires-title" >
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <Transition
          show={addingSkill && canAddNewSkill}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref} className="px-4 py-5 sm:px-6">
              <AddNew
                availableSkills={availableNewSkills}
                onCancel={() => setAddingSkill(false)}
              />
            </div>
          )}
        </Transition>

        <Transition
          show={!addingSkill}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref} className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Skills</h2>
              {
                canAddNewSkill && (
                  <button onClick={() => setAddingSkill(true)} className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
                    Add More
                  </button>
                )
              }
            </div>
          )}
        </Transition>
        <Transition
          show={isLoading}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref}>
              <Loading />
            </div>
          )}
        </Transition>
        <Transition
          show={isLoadingError}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref}>
              <Error />
            </div>
          )}
        </Transition>
        <Transition
          show={!isLoading && !isLoadingError}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref}>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                {
                  isProfileSkillsEmpty ? (
                    <p className="text-base text-gray-500">
                      You can showcase more skills to employers and taking more of our challenges to upgrade your level
                    </p>

                  ) : (
                      <SkillList
                        profileSkills={profileSkills}
                      />
                    )
                }
              </div>
              <div class="px-4 py-3 bg-gray-50 sm:px-6">
                <SkillDefinition
                  allSkillLevels={allSkillLevels}
                />
              </div>
            </div>
          )}
        </Transition>
      </div>
    </section >
  )
}

export default SkillMatrix;
import {
  useQuerySkillList,
  useQuerySkillLevelList,
  useQueryProfile
} from 'pages-lib/_states';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from 'pages-lib/_components/card';
import { H3 } from 'pages-lib/_components/typography';
import Button from 'pages-lib/_components/Button';
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
    <Card>
      <CardHeader>
        <Transition
          show={addingSkill && canAddNewSkill}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {(ref) => (
            <div ref={ref}>
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
            <div ref={ref} className="w-full flex items-center justify-between">
              <H3 >Skills</H3>
              {
                canAddNewSkill && (
                  <Button
                    type="submit"
                    color="secondary"
                    size="base"
                    onClick={() => setAddingSkill(true)}
                  >
                    Add More
                  </Button>
                )
              }
            </div>
          )}
        </Transition>
      </CardHeader>

      <Transition
        show={isLoading}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        {(ref) => (
          <div ref={ref}>
            <CardContent>
              <Loading />
            </CardContent>
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
            <CardContent>
              <Error />
            </CardContent>
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
            <CardContent>
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
            </CardContent>
            <CardFooter>
              <SkillDefinition
                allSkillLevels={allSkillLevels}
              />
            </CardFooter>
          </div>
        )}
      </Transition>
    </Card>
  )
}

export default SkillMatrix;
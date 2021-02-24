import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'pages-lib/_components/Button';
import SelectBox from 'pages-lib/_components/SelectBox';

const AddNew = ({
  availableSkills,
  onCancel
}) => {
  const router = useRouter();
  const [skill, setSkill] = useState('');

  const handleTakeChallenge = () => {
    router.push(`/challenges/${skill}`)
  }

  const handleSelectSkill = (skill) => () => {
    setSkill(skill);
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <label id="listbox-label" class="block text-sm font-medium text-gray-700">
          Select new skill
        </label>
        <div className="space-x-1 mt-2">
          {
            availableSkills.map(x => {
              const selected = x.code === skill;

              return (
                <span onClick={handleSelectSkill(x.code)} class={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border ${selected ? 'bg-gray-100 text-gray-800 border-gray-300' : 'border-gray-300'} cursor-pointer`}>
                  {x.name}
                </span>
              )
            })
          }
        </div>
      </div>
      <div className="mt-4 flex items-center w-full">
        <Button
          color="white"
          size="base"
          onClick={onCancel}
        >
          Cancel
            </Button>
        <Button
          type="submit"
          color="primary"
          size="base"
          onClick={handleTakeChallenge}
          disabled={!skill}
          className="ml-2"
        >
          Take Challenge
        </Button>
      </div>
    </div>

  )
}

export default AddNew;
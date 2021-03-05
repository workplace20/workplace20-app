import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'pages-lib/_components/controls';
import { SelectChip } from 'pages-lib/_components/controls';

const AddNew = ({
  availableSkills,
  onCancel
}) => {
  const router = useRouter();
  const [skill, setSkill] = useState('');

  const handleTakeChallenge = () => {
    router.push(`/challenges/${skill}`)
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <label id="listbox-label" class="block text-sm font-medium text-gray-700">
          Select new skill
        </label>
        <div className="mt-2">
          <SelectChip 
            options={availableSkills.map(x => ({
              label: x.name,
              value: x.code
            }))}
            value={skill}
            onChange={setSkill}
          />
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
import { useState } from 'react';
import { useRouter } from 'next/router';
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
        <button onClick={onCancel} className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
          Cancel
      </button>
        <button onClick={handleTakeChallenge} className="ml-2 px-4 py-2 border-transparent text-white bg-orange-500 disabled:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500" disabled={!skill}>
          Take Challenge
        </button>
      </div>
    </div>

  )
}

export default AddNew;
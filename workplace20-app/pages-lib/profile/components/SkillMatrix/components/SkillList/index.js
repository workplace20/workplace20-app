import Link from "next/link";

const SkillList = ({
  profileSkills
}) => {
  if (!profileSkills) return null;
  
  return (
    <div className="flow-root">
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
  )
}

export default SkillList;
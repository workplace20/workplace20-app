import {
  ProfileOverview,
  PersonalInformation,
  SkillMatrix
} from './components';

const CreatorProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <ProfileOverview />
        <PersonalInformation />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <SkillMatrix />
      </div>
    </div>
  )
}

export default CreatorProfile;
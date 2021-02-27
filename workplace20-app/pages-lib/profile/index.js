import { PROFILE_KIND } from 'pages-lib/_utils/constants';
import { useQueryProfileKind } from 'pages-lib/_states';
import CreatorProfilePage from './creator';
import BusinessProfilePage from './business';


const Profile = () => {
  const { data: profileKind } = useQueryProfileKind();
  const profilePages = {
    [PROFILE_KIND.creator]: <CreatorProfilePage />,
    [PROFILE_KIND.business]: <BusinessProfilePage />
  }

  return profilePages[profileKind] || null;
}

export default Profile;
import { atom } from 'recoil';
import ProfileRequest from 'pages-lib/_api-request/profiles';

const fetchProfile = async() => {
  try{
    const res = await ProfileRequest.getProfile();
    return res;
  }
  catch(ex) {
    return null;
  }
}


const ProfileState = atom({
  key: "profile_state",
  default: fetchProfile()
});

export default ProfileState;
import './ProfileContent.scss';
import React from 'react';

import {ProfileInfo, Posts, Publications} from "../components";
const ProfileContent = () => {

  return (
    <div className='profile-content'>
      <ProfileInfo />
      <Posts />
      <Publications />
    </div>
  );
};

export default ProfileContent;

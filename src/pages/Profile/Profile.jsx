import React from 'react';

import { ProfileEditForm } from '../../components/ProfileEditForm/ProfileEditForm.jsx';

import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='content-container'>
        <ProfileEditForm />
      </div>
    </div>
  );
};

export default Profile;

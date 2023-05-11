import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm.jsx';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='content-container'>
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;

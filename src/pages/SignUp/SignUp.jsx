import React from 'react';

import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

import './SignUp.css';

const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='content-container'>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default SignUp;

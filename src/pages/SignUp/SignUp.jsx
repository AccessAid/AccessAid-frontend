import React from 'react';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

const SignUp = () => {
  return (
    <div className='App bg-gradient-to-r from-white via-secondary-dark to-tertiary-dark dark:from-black dark:via-secondary-light dark:to-tertiary-light'>
      <h1 className='font-jakarta text-8xl'>Sign Up</h1>
      <RegistrationForm />
    </div>
  );
};

export default SignUp;

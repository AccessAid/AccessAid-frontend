import React from 'react';

import { LoginForm } from '../../components/LoginForm/LoginForm';

import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='content-container'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

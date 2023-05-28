import React, { useEffect, useState } from 'react';

import { Card, Button, Typography } from '@material-tailwind/react';

import { InputValidation } from '../../InputValidation/InputValidation';
import { selectUserData } from '../../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import { useForm, useFormContext } from 'react-hook-form';
import { selectProfileError } from '../../../store/slices/profileSlice';

const GroupInputsCredentials = () => {
  const userData = useSelector(selectUserData);

  const { reset } = useFormContext();

  const [defaultCredentialsData, setDefaultCredentialsData] = useState({
    username: userData?.username,
    email: userData?.email,
    oldPassword: '',
    newPassword: '',
  });

  // useEffect(() => {
  //   defaultUserData = {
  //     username: userData?.username,
  //     email: userData?.email,
  //   }
  // }, [userData]);

  useEffect(() => {
    reset(defaultCredentialsData);
  }, [defaultCredentialsData]);

  return (
    <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
      <InputValidation
        nameField='email'
        controllerProps={{ defaultValue: defaultCredentialsData.email }}
        inputProps={{ size: 'lg', label: 'Email', type: 'text' }}
        rules={{
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address',
          },
        }}
      />

      <InputValidation
        nameField='username'
        controllerProps={{ defaultValue: defaultCredentialsData.username }}
        inputProps={{ size: 'lg', label: 'Username', type: 'text' }}
        rules={{
          minLength: {
            value: 3,
            message: 'The username must be at least 3 characters long',
          },
          maxLength: {
            value: 20,
            message: 'The username must not exceed 20 characters',
          },
        }}
      />

      <InputValidation
        nameField='oldPassword'
        controllerProps={{ defaultValue: defaultCredentialsData.oldPassword }}
        inputProps={{
          size: 'lg',
          label: 'Old Password',
          type: 'password',
        }}
        rules={{
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
        }}
        selectorApiError={selectProfileError}
      />

      <InputValidation
        nameField='newPassword'
        controllerProps={{ defaultValue: defaultCredentialsData.newPassword }}
        inputProps={{
          size: 'lg',
          label: 'New Password',
          type: 'password',
        }}
        rules={{
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
        }}
      />
    </div>
  );
};

export { GroupInputsCredentials };

import React, { useEffect, useState } from 'react';

import { Card, Button, Typography } from '@material-tailwind/react';

import { InputValidation } from '../../InputValidation/InputValidation';
import {
  PERSIST_KEY_USER,
  selectUserData,
} from '../../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import { useForm, useFormContext } from 'react-hook-form';
import { selectProfileError } from '../../../store/slices/profileSlice';

const GroupInputsCredentials = () => {
  const userData = useSelector(selectUserData);
  const { reset } = useFormContext();

  const validateFillOldPassword = (value, watch) => {
    if (value === '' && watch('newPassword') !== '') {
      return 'If you want to update your password, please write the old password';
    }
    return true; // return true if validation passes
  };

  const validateFillNewPassword = (value, watch) => {
    if (value === '' && watch('oldPassword') !== '') {
      return 'If you want to update your password, please write the new password';
    }
    return true; // return true if validation passes
  };

  useEffect(() => {
    const storageUserData = localStorage.getItem(PERSIST_KEY_USER);
    if (storageUserData && !userData?.username) {
      reset({
        username: JSON.parse(storageUserData)?.username,
        email: JSON.parse(storageUserData)?.email,
      });
      return;
    }
    reset({
      username: userData?.username,
      email: userData?.email,
    });
  }, [userData]);

  return (
    <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
      <div>
        <InputValidation
          nameField='email'
          controllerProps={{ defaultValue: '' }}
          inputProps={{ size: 'lg', label: 'Email', type: 'text' }}
          rules={{
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          }}
        />
      </div>

      <div>
        <InputValidation
          nameField='username'
          controllerProps={{
            defaultValue: '',
          }}
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
      </div>

      <div>
        <InputValidation
          nameField='oldPassword'
          controllerProps={{
            defaultValue: '',
          }}
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
          customValidation={validateFillOldPassword}
        />
      </div>

      <div>
        <InputValidation
          nameField='newPassword'
          controllerProps={{
            defaultValue: '',
          }}
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
          customValidation={validateFillNewPassword}
        />
      </div>
    </div>
  );
};

export { GroupInputsCredentials };

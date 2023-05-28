import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { Card, Button, Typography } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { GroupInputsCredentials } from './GroupInputsCredentials/GroupInputsCredentials';
import { InputValidation } from '../InputValidation/InputValidation';
import { PERSIST_KEY_USER, selectUserData } from '../../store/slices/authSlice';
import { updateBasicCredentials } from '../../store/actions/authActions';
import { selectProfileError } from '../../store/slices/profileSlice';

const UserInformationForm = () => {
  const userData = useSelector(selectUserData);
  const emptyCredentialsData = {
    username: userData?.username,
    email: userData?.email,
    oldPassword: '',
    newPassword: '',
  };
  const [defaultCredentialsData, setDefaultCredentialsData] =
    useState(emptyCredentialsData);

  const hookFormMethods = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const watchNewPassword = hookFormMethods.watch('newPassword');

  const validateFillNewPassword = (value, watch) => {
    if (value !== '' && watch('newPassword') === '') {
      return 'If you want to update your password, please write the new password'; // return error message if confirm password is null
    }
    return true; // return true if validation passes
  };

  const onSubmit = async (data) => {
    try {
      console.log('data************', data);
      const resultAction = await dispatch(
        updateBasicCredentials({ userId: userData?.id, userBasicData: data }),
      );
      console.log(`resultAction update credentials =`, resultAction);

      if (resultAction?.payload?.id) {
        toast.success('Update credentials successfully!', {
          autoClose: 1000,
        });
      } else {
        toast.error('There is an error updating credentials!', {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error('There is an error updating credentials!', {
        autoClose: 2000,
      });

      console.log(error);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem(PERSIST_KEY_USER);
    if (userData) {
      hookFormMethods.reset({
        ...defaultCredentialsData,
        username: JSON.parse(userData)?.username,
        email: JSON.parse(userData)?.email,
      });
    }
  }, [defaultCredentialsData, userData]);

  return (
    <Card color='transparent' shadow={false}>
      <Typography color='gray' className='mt-9 font-normal'>
        Basic Credentials
      </Typography>

      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-8 max-w-screen-lg'>
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
              controllerProps={{
                defaultValue: defaultCredentialsData.username,
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

            <InputValidation
              nameField='oldPassword'
              controllerProps={{
                defaultValue: defaultCredentialsData.oldPassword,
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
              customValidation={validateFillNewPassword}
            />

            <InputValidation
              nameField='newPassword'
              controllerProps={{
                defaultValue: defaultCredentialsData.newPassword,
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
            />
          </div>

          <Button
            className='mt-6'
            fullWidth
            onClick={hookFormMethods.handleSubmit(onSubmit)}
            disabled={
              Object.keys(hookFormMethods.formState.errors).length > 0
                ? true
                : false
            }
          >
            Update Basic Credentials
          </Button>
        </form>
      </FormProvider>

      <ToastContainer />
    </Card>
  );
};

export { UserInformationForm };

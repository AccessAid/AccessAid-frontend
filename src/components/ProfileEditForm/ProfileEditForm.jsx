import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card, Button, Typography } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { SelectorValidation } from '../SelectorValidation/SelectorValidation';
import { countries } from './countries.js';
import 'flag-icon-css/css/flag-icons.css';
import { InputValidation } from '../InputValidation/InputValidation';

const ProfileEditForm = ({ initialValues }) => {
  const hookFormMethods = useForm({ defaultValues: initialValues });
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);

    toast.success('Profile Updated Successfully!', {
      autoClose: 1700,
    });
  };

  return (
    <Card color='transparent' shadow={false}>
      <Typography variant='h4' color='blue-gray'>
        Edit Profile
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Update your profile information.
      </Typography>
      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-8 max-w-screen-lg sm:flex sm:gap-4 '>
          <div className='mt-3 space-y-4 sm:w-1/2'>
            <InputValidation
              nameField='firstName'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'First Name', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your first name',
                },
              }}
            />

            <InputValidation
              nameField='lastName'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Last Name', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your last name',
                },
              }}
            />

            <InputValidation
              nameField='email'
              controllerProps={{ defaultValue: userData.email || '' }}
              inputProps={{ size: 'lg', label: 'Email', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your email address',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              }}
            />

            <InputValidation
              nameField='username'
              controllerProps={{ defaultValue: userData.username || '' }}
              inputProps={{ size: 'lg', label: 'Username', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your username',
                },
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
              nameField='avatarPath'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Avatar URL', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your avatar URL',
                },
                pattern: {
                  value: /^https?:\/\/.*$/i,
                  message: 'Invalid URL format',
                },
              }}
            />

            <SelectorValidation
              nameField='country'
              controllerProps={{ defaultValue: '' }}
              selectProps={{
                label: 'Select Country',
                options: Object.entries(countries).map(([key, value]) => ({
                  contentOption: (
                    <React.Fragment>
                      <span
                        className={`flag-icon flag-icon-${value.icon}`}
                        style={{ marginRight: '0.5rem' }}
                      ></span>
                      {value.name}
                    </React.Fragment>
                  ),
                  value: key,
                })),
                className: 'centered-options',
              }}
              rules={{
                required: {
                  value: true,
                  message: 'Please select an option.',
                },
              }}
            />
          </div>

          <div className='mt-3 space-y-4 sm:w-1/2'>
            <InputValidation
              nameField='streetAddress'
              controllerProps={{ defaultValue: '' }}
              inputProps={{
                size: 'lg',
                label: 'Street Address',
                type: 'text',
              }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your street address',
                },
              }}
            />

            <InputValidation
              nameField='city'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'City', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your city',
                },
              }}
            />

            <InputValidation
              nameField='zipCode'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'ZIP Code', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your ZIP code',
                },
              }}
            />

            <InputValidation
              nameField='phone'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Phone', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your phone number',
                },
              }}
            />

            <InputValidation
              nameField='about'
              controllerProps={{ defaultValue: '' }}
              inputProps={{
                size: 'lg',
                label: 'About',
                type: 'textarea',
                rows: 4,
              }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter some information about yourself',
                },
              }}
            />

            <Button
              fullWidth
              onClick={hookFormMethods.handleSubmit(onSubmit)}
              disabled={
                Object.keys(hookFormMethods.formState.errors).length > 0
              }
            >
              Update Profile
            </Button>
          </div>
        </form>
      </FormProvider>
      <ToastContainer />
    </Card>
  );
};

export { ProfileEditForm };

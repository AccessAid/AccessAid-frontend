import React, { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from './../../store/actions/authActions';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import InputValidation from '../InputValidation/InputValidation';
import RadioValidation from '../RadioValidation/RadioValidation';

const RegistrationForm = () => {
  const hookFormMethods = useForm();

  const dispatch = useDispatch();
  const isRegistering = useSelector((state) => state.auth.loading);
  const apiError = useSelector((state) => state.auth.error);

  const onSubmit = async (data) => {
    try {
      console.log('data', data);

      const resultAction = await dispatch(signup(data));
      console.log('resultAction', resultAction);
    } catch (error) {}
  };

  console.log('errors', hookFormMethods.formState.errors);

  return (
    <Card color='transparent' shadow={false}>
      <Typography variant='h4' color='blue-gray'>
        Sign Up
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Enter your details to register.
      </Typography>
      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-8 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-4 flex flex-col gap-6'>
            <InputValidation
              nameField='username'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Username', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Por favor, escriba su nombre de usuario.',
                },
                minLength: {
                  value: 3,
                  message:
                    'El nombre de usuario debe tener al menos 3 caracteres.',
                },
                maxLength: {
                  value: 20,
                  message:
                    'El nombre de usuario debe tener como máximo 20 caracteres.',
                },
              }}
            />

            <InputValidation
              nameField='email'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Email', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Por favor, escriba su email.',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              }}
            />

            <InputValidation
              nameField='password'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Password', type: 'password' }}
              rules={{
                required: {
                  value: true,
                  message: 'Por favor, escriba su contraseña',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              }}
            />
          </div>

          <RadioValidation
            nameField='conditions'
            controllerProps={{ defaultValue: false }}
            inputProps={{
              containerProps: {
                className: '-ml-2.5',
              },
              label: (
                <Typography
                  variant='small'
                  color='gray'
                  className='flex items-center font-normal'
                >
                  I agree the
                  <a
                    href='#'
                    className='font-medium transition-colors hover:text-blue-500'
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              ),
            }}
            rules={{
              required: {
                value: true,
                message: 'Por favor, seleccione esta casilla para continuar.',
              },
            }}
          />

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
            Submit
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            Already have an account?{' '}
            <a
              href='#'
              className='font-medium text-blue-500 transition-colors hover:text-blue-700'
            >
              Sign In
            </a>
          </Typography>
        </form>
      </FormProvider>
    </Card>
  );
};

export default RegistrationForm;

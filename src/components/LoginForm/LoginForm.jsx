import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography } from '@material-tailwind/react';
import { login, getUserData } from './../../store/actions/authActions';
import { InputValidation } from '../InputValidation/InputValidation';
import { HOME, SIGNUP } from '../../config/routes';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const hookFormMethods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(login(data)).unwrap();
      console.log(`resultAction =`, resultAction);

      if (resultAction?.token) {
        const userDataAction = await dispatch(
          getUserData(data.username),
        ).unwrap();
        if (userDataAction) {
          console.log(`userDataAction =`, userDataAction);
        }
        navigate(HOME);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card color='transparent' shadow={false}>
      <Typography variant='h4' color='blue-gray'>
        Sign In
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Enter your credentials to sign in.
      </Typography>
      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-8 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-4 flex flex-col gap-4'>
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
              nameField='password'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Password', type: 'password' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your password.',
                },
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
            disabled={Object.keys(hookFormMethods.formState.errors).length > 0}
          >
            Sign In
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            {"Don't have an account?"}
            <span className='font-medium text-blue-500 transition-colors hover:text-blue-700'>
              {' '}
              <Link to={SIGNUP}>Sign Up</Link>
            </span>
          </Typography>
        </form>
      </FormProvider>
    </Card>
  );
};

export { LoginForm };

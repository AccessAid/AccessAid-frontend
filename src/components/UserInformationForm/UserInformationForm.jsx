import React from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { GroupInputsCredentials } from './GroupInputsCredentials/GroupInputsCredentials';
import {
  selectRefreshToken,
  selectUserData,
} from '../../store/slices/authSlice';
import { LOGIN } from '../../config/routes/index';
import {
  refreshTokenAction,
  updateBasicCredentials,
} from '../../store/actions/authActions';

const UserInformationForm = () => {
  const userData = useSelector(selectUserData);
  const refreshToken = useSelector(selectRefreshToken);

  const hookFormMethods = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const resultUpdateCredentials = await dispatch(
        updateBasicCredentials({ userId: userData?.id, userBasicData: data }),
      );

      if (resultUpdateCredentials?.payload?.id) {
        const resultRefreshToken = await dispatch(
          refreshTokenAction({
            refreshToken,
          }),
        );

        if (resultRefreshToken?.payload?.token) {
          toast.success('Update credentials successfully!', {
            autoClose: 1700,
          });
          return;
        }
        toast.error(
          'Your credentials were updated but there was a problem, please log in again!',
          {
            autoClose: 3500,
          },
        );
        dispatch(logout());
        navigate(LOGIN);
        return;
      }
      toast.error('There is an error updating credentials, come back later', {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('There is an error updating credentials!', {
        autoClose: 2000,
      });
    }
  };

  return (
    <Card color='transparent' shadow={false}>
      <Typography color='gray' className='mt-9 font-normal'>
        Basic Credentials
      </Typography>

      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-8 max-w-screen-lg'>
          <GroupInputsCredentials />

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

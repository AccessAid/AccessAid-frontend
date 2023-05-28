import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card, Button, Typography } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import 'flag-icon-css/css/flag-icons.css';
import { InputValidation } from '../InputValidation/InputValidation';
import { selectUserData } from '../../store/slices/authSlice';
import { UserInformationForm } from '../UserInformationForm/UserInformationForm';
import {
  addProfile,
  deleteProfile,
  getProfileByUser,
  updateProfile,
} from '../../store/actions/profileActions';
import { GroupInputsCredentials } from '../UserInformationForm/GroupInputsCredentials/GroupInputsCredentials';
import { TextareaValidation } from '../TextareaValidation/TextareaValidation';
import { SelectorValidation } from '../SelectorValidation/SelectorValidation';
import { countries } from '../../commons/utils/countries';
import { getUserData } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { selectProfileError } from '../../store/slices/profileSlice';

const ProfileEditForm = () => {
  const userData = useSelector(selectUserData);
  const emptyProfileDate = {
    firstName: '',
    lastName: '',
    avatarPath: '',
    streetAddress: '',
    city: '',
    country: '',
    zipCode: '',
    phone: '',
    about: '',
  };
  const [defaultProfileData, setDefaultProfileData] =
    useState(emptyProfileDate);
  const hookFormMethods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const resultUserDataAction = await dispatch(
          getUserData(userData.username),
        );

        if (!resultUserDataAction?.payload?.profile) {
          toast.info(
            'Your profile is empty, we recommend to add more information',
            {
              autoClose: 3500,
            },
          );
          return;
        }

        if (resultUserDataAction?.payload?.profile) {
          setDefaultProfileData(resultUserDataAction.payload.profile);
        }
      } catch (error) {
        toast.error(
          "We're having troubles get your profile information, come back later",
          {
            autoClose: 1700,
          },
        );
      }
    })();
  }, []);

  useEffect(() => {
    hookFormMethods.reset(defaultProfileData);
  }, [defaultProfileData]);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      if (userData?.profile && defaultProfileData.id !== 0) {
        const resultUpdated = await dispatch(
          updateProfile({
            profileId: defaultProfileData.id,
            profileData: {
              ...data,
              userId: userData.id,
            },
          }),
        );

        if (resultUpdated?.payload?.id) {
          toast.success('Profile Updated Successfully!', {
            autoClose: 1700,
          });
          // navigate(0);
        } else {
          toast.error(
            "We're having troubles adding your profile, come back later",
            {
              autoClose: 1700,
            },
          );
        }
      } else {
        const resultAdded = await dispatch(
          addProfile({
            ...data,
            user: {
              id: userData.id,
            },
          }),
        );

        if (resultAdded?.payload?.id) {
          toast.success('Profile Updated Successfully!', {
            autoClose: 1700,
          });
          navigate(0);
        } else {
          toast.error(
            "We're having troubles adding your profile, come back later",
            {
              autoClose: 1700,
            },
          );
        }
      }
    } catch (error) {
      toast.error(
        "We're having troubles adding your profile, come back later",
        {
          autoClose: 1700,
        },
      );
    }
  };

  const handleDeleteProfile = async () => {
    if (defaultProfileData.id !== 0) {
      try {
        const resultDelete = await dispatch(
          deleteProfile(defaultProfileData.id),
        );

        if (resultDelete?.payload?.message.includes('deleted')) {
          // hookFormMethods.reset(emptyProfileDate);
          toast.success('Profile Removed Successfully!', {
            autoClose: 1700,
          });
          navigate(0);
        } else {
          toast.error(resultDelete?.payload?.message, {
            autoClose: 1700,
          });
        }
      } catch (error) {
        toast.error(
          "We're having troubles deleting your profile, come back later",
          {
            autoClose: 1700,
          },
        );
      }
    }
  };

  const validateFillNewPassword = (value, watch) => {
    if (value !== '' && watch('newPassword') === '') {
      return 'If you want to update your password, please write the new password'; // return error message if confirm password is null
    }
    return true; // return true if validation passes
  };

  return (
    <Card color='transparent' shadow={false}>
      <Typography variant='h4' color='blue-gray'>
        Edit Profile
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Update your profile information.
      </Typography>

      {!userData?.profile && <UserInformationForm />}

      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-2 max-w-screen-xl '>
          {userData?.profile && (
            <div className='mb-9'>
              <Typography color='gray' className='mb-7 mt-9 font-normal'>
                Basic Credentials
              </Typography>
              <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
                <InputValidation
                  nameField='email'
                  controllerProps={{
                    defaultValue: defaultProfileData?.email,
                  }}
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
                    defaultValue: defaultProfileData?.username,
                  }}
                  inputProps={{ size: 'lg', label: 'Username', type: 'text' }}
                  rules={{
                    minLength: {
                      value: 3,
                      message:
                        'The username must be at least 3 characters long',
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
                  selectorApiError={selectProfileError}
                  customValidation={validateFillNewPassword}
                />

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
                />
              </div>
            </div>
          )}

          <hr className='mb-5 mt-2' />

          <Typography color='gray' className='my-8 mt-1 font-normal'>
            Personal Information
          </Typography>

          <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
            <InputValidation
              nameField='firstName'
              controllerProps={{ defaultValue: defaultProfileData.firstName }}
              inputProps={{ size: 'lg', label: 'First Name', type: 'text' }}
            />

            <InputValidation
              nameField='lastName'
              controllerProps={{ defaultValue: defaultProfileData.lastName }}
              inputProps={{ size: 'lg', label: 'Last Name', type: 'text' }}
            />
          </div>

          <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
            <SelectorValidation
              nameField='country'
              controllerProps={{ defaultValue: defaultProfileData.country }}
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
            />

            <InputValidation
              nameField='city'
              controllerProps={{ defaultValue: defaultProfileData.city }}
              inputProps={{ size: 'xs', label: 'City', type: 'text' }}
            />
          </div>

          <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
            <InputValidation
              nameField='zipCode'
              controllerProps={{ defaultValue: defaultProfileData.zipCode }}
              inputProps={{
                size: 'xs',
                label: 'Zip/Code Postal',
                type: 'number',
              }}
            />

            <InputValidation
              nameField='streetAddress'
              controllerProps={{
                defaultValue: defaultProfileData.streetAddress,
              }}
              inputProps={{
                size: 'xs',
                label: 'Street Address',
                type: 'text',
              }}
            />
          </div>

          <div className='mb-4 grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2'>
            <InputValidation
              nameField='phone'
              controllerProps={{ defaultValue: defaultProfileData.phone }}
              inputProps={{ size: 'lg', label: 'Phone', type: 'text' }}
              rules={{
                pattern: {
                  value: /^\+\d{1,3} \d{3,14}$/i,
                  message: 'Invalid Phone format, example: +34 657324511',
                },
              }}
            />

            <InputValidation
              nameField='avatarPath'
              controllerProps={{ defaultValue: defaultProfileData.avatarPath }}
              inputProps={{ size: 'lg', label: 'Avatar URL', type: 'text' }}
              rules={{
                pattern: {
                  value: /^https?:\/\/.*$/i,
                  message: 'Invalid URL format',
                },
              }}
            />
          </div>

          <div className='w-full pb-6 pt-2'>
            <TextareaValidation
              nameField='about'
              controllerProps={{ defaultValue: defaultProfileData.about }}
              inputProps={{ size: 'lg', label: 'About' }}
              rules={{
                minLength: {
                  value: 10,
                  message: 'Message must have at least 10 characters.',
                },
                maxLength: {
                  value: 200,
                  message: 'Message can have a maximum of 200 characters.',
                },
              }}
            />
          </div>

          {userData?.profile && (
            <Button
              color='secondary'
              variant='contained'
              onClick={handleDeleteProfile}
            >
              Delete Profile
            </Button>
          )}

          <Button
            className='ml-2'
            variant='contained'
            onClick={hookFormMethods.handleSubmit(onSubmit)}
            disabled={Object.keys(hookFormMethods.formState.errors).length > 0}
          >
            {userData?.profile
              ? 'Update Profile and basic credentials'
              : 'Add Profile'}
          </Button>
        </form>
      </FormProvider>
      <ToastContainer />
    </Card>
  );
};

export { ProfileEditForm };

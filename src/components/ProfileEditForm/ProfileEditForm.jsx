import React, { useState, useEffect } from 'react';
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
import {
  addProfile,
  deleteProfile,
  getProfileByUser,
  updateProfile,
} from '../../store/actions/profileActions';

const ProfileEditForm = () => {
  const emptyProfileDate = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    username: '',
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
  const [isProfileExist, setIsProfileExist] = useState(false);
  const hookFormMethods = useForm();
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const result = await dispatch(getProfileByUser(userData.id));

        if (result?.payload?.message?.includes('not found')) {
          toast.info(
            'Your profile is empty, we recommend to add more information',
            {
              autoClose: 3500,
            },
          );
          return;
        }

        if (result?.payload?.id) {
          setDefaultProfileData(result.payload);
          setIsProfileExist(true);
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
      if (isProfileExist) {
        const resultUpdated = await dispatch(
          updateProfile({
            profileId: defaultProfileData.id,
            profileData: {
              ...data,
              user: {
                id: userData.id,
              },
            },
          }),
        );

        if (resultUpdated?.payload?.id) {
          toast.success('Profile Updated Successfully!', {
            autoClose: 1700,
          });
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

        if (resultDelete) {
          const { username, email, ...restOfFields } = emptyProfileDate;
          hookFormMethods.reset(restOfFields);
          toast.success('Profile Removed Successfully!', {
            autoClose: 1700,
          });
        } else {
          toast.error(
            "We're having troubles deleting your profile, come back later",
            {
              autoClose: 1700,
            },
          );
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
              controllerProps={{ defaultValue: defaultProfileData.firstName }}
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
              controllerProps={{ defaultValue: defaultProfileData.lastName }}
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
              controllerProps={{ defaultValue: defaultProfileData.avatarPath }}
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
              controllerProps={{
                defaultValue: defaultProfileData.streetAddress,
              }}
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
              controllerProps={{ defaultValue: defaultProfileData.city }}
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
              controllerProps={{ defaultValue: defaultProfileData.zipCode }}
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
              controllerProps={{ defaultValue: defaultProfileData.phone }}
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
              controllerProps={{ defaultValue: defaultProfileData.about }}
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
              {isProfileExist ? 'Update Profile' : 'Add Profile'}
            </Button>

            {isProfileExist && (
              <Button
                color='secondary'
                variant='contained'
                fullWidth
                onClick={handleDeleteProfile}
              >
                Delete Profile
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
      <ToastContainer />
    </Card>
  );
};

export { ProfileEditForm };

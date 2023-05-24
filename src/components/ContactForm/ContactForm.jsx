import { Button, Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HOME } from '../../config/routes';
import { contactAction } from '../../store/actions/contactActions';
import { InputValidation } from '../InputValidation/InputValidation';
import { TextareaValidation } from '../TextareaValidation/TextareaValidation';

const ContactForm = () => {
  const hookFormMethods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('data contact', data);
    dispatch(contactAction(data))
      .then(() => {
        navigate(HOME);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card color='transparent' shadow={false}>
      <Typography variant='h4' color='blue-gray'>
        Contact Us
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Send us your comments, questions, and suggestions.
      </Typography>
      <FormProvider {...hookFormMethods}>
        <form
          className='mb-2 mt-8 w-80 max-w-screen-lg sm:w-96'
          onSubmit={hookFormMethods.handleSubmit(onSubmit)}
        >
          <div className='mb-4 flex flex-col gap-4'>
            <InputValidation
              nameField='name'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Name', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your name.',
                },
                minLength: {
                  value: 3,
                  message: 'Name must have at least 3 characters.',
                },
                maxLength: {
                  value: 20,
                  message: 'Name must have a maximum of 20 characters.',
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
                  message: 'Please enter your email.',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              }}
            />

            <InputValidation
              nameField='subject'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Subject', type: 'text' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter the subject.',
                },
              }}
            />

            <TextareaValidation
              nameField='message'
              controllerProps={{ defaultValue: '' }}
              inputProps={{ size: 'lg', label: 'Message' }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your message.',
                },
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

          <Button
            className='mt-6'
            fullWidth
            onClick={hookFormMethods.handleSubmit(onSubmit)}
            disabled={Object.keys(hookFormMethods.formState.errors).length > 0}
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
};

export { ContactForm };

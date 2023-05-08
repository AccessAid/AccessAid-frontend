import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Textarea,
  Button,
  Card,
  Typography,
} from '@material-tailwind/react';

import './ContactForm.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='contact__form'>
      <Card color='transparent' shadow={false} className='contact-card'>
        <Typography variant='h4' color='blue-gray'>
          Contact us
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'>
          Send us your comments, questions and suggestions about our
          accessibility platform
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id='name'
            label='Nombre'
            variant='outlined'
            {...register('name', { required: true })}
            error={errors.name}
          />
          <Input
            id='email'
            label='Email'
            variant='outlined'
            {...register('email', { required: true })}
            error={errors.message}
          />
          <Input
            id='subject'
            label='Asunto'
            variant='outlined'
            {...register('subject', { required: true })}
            error={errors.subject}
          />
          <Textarea
            id='message'
            rows={5}
            label='Mensaje'
            {...register('message', { required: true })}
            error={errors.message}
          />
          <Button type='submit' variant='filled'>
            Enviar
          </Button>
        </form>
      </Card>
    </div>
  );
};

export { ContactForm };

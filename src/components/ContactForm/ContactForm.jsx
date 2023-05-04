import { useForm } from 'react-hook-form';
import { Input, Textarea, Button } from '@material-tailwind/react';

import './ContactForm.css';

export const ContactForm = () => {
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
          minRows={5}
          label='Mensaje'
          {...register('message', { required: true })}
          error={errors.message}
        />
        <Button type='submit' variant='filled'>
          Enviar
        </Button>
      </form>
    </div>
  );
};

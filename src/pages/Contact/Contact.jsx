import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='App bg-gradient-to-r from-white via-secondary-dark to-tertiary-dark dark:from-black dark:via-secondary-light dark:to-tertiary-light'>
      <h1 className='font-jakarta text-8xl'>Contact</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;

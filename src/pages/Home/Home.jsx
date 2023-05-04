import React from 'react';
import { ContactForm } from '../../components';

const Home = () => {
  return (
    <div className='App bg-gradient-to-r from-white via-secondary-dark to-tertiary-dark dark:from-black dark:via-secondary-light dark:to-tertiary-light'>
      <h1 className='font-jakarta text-8xl'>Welcome to Access Aid</h1>
      <ContactForm />
    </div>
  );
};

export default Home;

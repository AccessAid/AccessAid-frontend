import React from 'react';
import { Sponsors } from '../../components/Sponsors/Sponsors';
import { NotificationCard } from '../../components/NotificationCard/NotificationCard';

const Home = () => {
  return (
    <div className='App bg-gradient-to-r from-white via-secondary-dark to-tertiary-dark dark:from-black dark:via-secondary-light dark:to-tertiary-light'>
      <h1 className='font-jakarta text-8xl'>Welcome to Access Aid</h1>

      <Sponsors />
      <NotificationCard />
    </div>
  );
};

export default Home;

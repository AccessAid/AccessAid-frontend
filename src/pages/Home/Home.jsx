import React from 'react';
import { Sponsors } from '../../components/Sponsors/Sponsors';
import { NotificationCard } from '../../components/NotificationCard/NotificationCard';
import { Banner } from '../../components/Banner/Banner';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Sponsors />
      <NotificationCard />
    </div>
  );
};

export default Home;

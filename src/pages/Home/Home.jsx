import React from 'react';
import { Sponsors } from '../../components/Sponsors/Sponsors';
import { GroupCards } from '../../components/GroupCards/GroupCards';
import { Banner } from '../../components/Banner/Banner';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Sponsors />
      <GroupCards />
    </div>
  );
};

export default Home;

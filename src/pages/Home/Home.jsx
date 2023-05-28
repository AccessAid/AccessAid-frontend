import React from 'react';
import { Sponsors } from '../../components/Sponsors/Sponsors';
import { GroupCards } from '../../components/GroupCards/GroupCards';
import { Banner } from '../../components/Banner/Banner';
import { InfoFeatures } from '../../components/InfoFeatures/InfoFeatures';
import { CardsInfo } from '../../components/CardsInfo/CardsInfo';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Sponsors />
      <GroupCards />
      <InfoFeatures />
      <CardsInfo />
    </div>
  );
};

export default Home;

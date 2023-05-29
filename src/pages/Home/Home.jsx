import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import { CardsInfo } from '../../components/CardsInfo/CardsInfo';
import { GroupCards } from '../../components/GroupCards/GroupCards';
import { InfoFeatures } from '../../components/InfoFeatures/InfoFeatures';
import { Sponsors } from '../../components/Sponsors/Sponsors';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <InfoFeatures />
      <CardsInfo />
      <Sponsors />
      <GroupCards />
    </div>
  );
};

export default Home;

import React from 'react';

import ProgramacionEsImage from '../../assets/img/programacion_es.png';
import DonWebImage from '../../assets/img/donweb.png';

import './Sponsors.css';

const Sponsors = () => {
  return (
    <>
      <div className='sponsors__container'>
        <div className='sponsors__content'>
          <h2 className='sponsors__title'>Devathon Sponsors</h2>
          <div className='sponsors__logos'>
            <img
              className='sponsors__logo'
              src={ProgramacionEsImage}
              alt='Transistor'
              width='258'
              height='8'
            />
            <img
              className='sponsors__logo'
              src={DonWebImage}
              alt='Reform'
              width='158'
              height='48'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Sponsors };

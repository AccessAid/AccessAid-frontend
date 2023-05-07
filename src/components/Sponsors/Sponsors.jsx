import React from 'react';

import './Sponsors.css';

const Sponsors = () => {
  return (
    <>
      <div className='sponsors__container'>
        <div className='sponsors__content'>
          <h2 className='sponsors__title'>
            Trusted by the world’s most innovative teams
          </h2>
          <div className='sponsors__logos'>
            <img
              className='sponsors__logo'
              src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
              alt='Transistor'
              width='158'
              height='48'
            />
            <img
              className='sponsors__logo'
              src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
              alt='Reform'
              width='158'
              height='48'
            />
            <img
              className='sponsors__logo'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
              alt='Tuple'
              width='158'
              height='48'
            />
            <img
              className='sponsors__logo sponsors__logo-4'
              src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
              alt='SavvyCal'
              width='158'
              height='48'
            />
            <img
              className='sponsors__logo sponsors__logo-5'
              src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
              alt='Statamic'
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

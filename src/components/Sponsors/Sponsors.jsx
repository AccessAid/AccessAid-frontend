import React from 'react';
import { sponsorImages } from './utils';

import './Sponsors.css';

const Sponsors = () => {
  return (
    <>
      <div className='sponsors__container'>
        <div className='sponsors__content '>
          <h2 className='sponsors__title'>Devathon Sponsors</h2>
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
            {sponsorImages.map((image, index) => (
              <img
                key={index}
                className='sponsors__logo px-10'
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={image.hasWhiteText ? { backgroundColor: 'black' } : null}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Sponsors };

import React from 'react';

import BannerMapImage from '../../assets/img/map-points.jpeg';
import WheelChairGirlImage from '../../assets/img/wheelchair-girl.jpeg';
import WheelChairStreetImage from '../../assets/img/wheelchair-street.jpeg';
import './CardsInfo.css';

const CardsInfo = () => {
  return (
    <div className='section-cards-info'>
      <div className='cards-info-container -mt-14'>
        <div className='-mx-4 flex flex-wrap items-center justify-center'>
          <div className='w-full px-4 md:w-1/2 xl:w-1/3'>
            <div className='mb-10 overflow-hidden rounded-lg bg-white '>
              <div
                className='h-72 bg-cover bg-center'
                style={{
                  backgroundImage: `url(${BannerMapImage})`,
                }}
              />
              <div className='p-8 text-center sm:p-9 md:p-7 xl:p-9'>
                <h3 className='text-dark text-resizable mb-4 text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'>
                  Discover Accessible Places
                </h3>
                <p className=' text-body-color text-resizable mb-7 text-base leading-relaxed'>
                  Find and explore accessible locations on the map, specifically
                  designed for individuals with disabilities.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 xl:w-1/3'>
            <div className='mb-10 overflow-hidden rounded-lg bg-white'>
              <div
                className='h-72 bg-cover bg-center'
                style={{
                  backgroundImage: `url(${WheelChairGirlImage})`,
                }}
              />
              <div className='p-8 text-center sm:p-9 md:p-7 xl:p-9'>
                <h3 className='text-dark mb-4 text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'>
                  Plan Accessible Routes
                </h3>
                <p className='text-body-color mb-7 text-base leading-relaxed'>
                  Create customized accessible routes based on your preferences
                  and needs, ensuring a hassle-free journey.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 xl:w-1/3'>
            <div className='mb-10 overflow-hidden rounded-lg bg-white'>
              <div
                className='h-72 bg-cover bg-center'
                style={{
                  backgroundImage: `url(${WheelChairStreetImage})`,
                }}
              />
              <div className='p-8 text-center sm:p-9 md:p-7 xl:p-9'>
                <h3 className='text-dark mb-4 text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'>
                  Share Your Experiences
                </h3>
                <p className='text-body-color mb-7 text-base leading-relaxed'>
                  Contribute to the accessibility community by sharing your
                  experiences and reviews of accessible places.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardsInfo };

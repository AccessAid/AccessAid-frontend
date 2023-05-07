import React from 'react';
import BannerMapImage from '../../assets/svg/banner_map.svg';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner-content'>
        <div className='banner-text'>
          <h1 className='banner-title'>Find accessible places near you</h1>

          <p className='banner-description'>
            Explore accessible places in real time with our web platform
            specialized in accessibility
          </p>
        </div>

        <div className='banner-image'>
          <img
            src={BannerMapImage}
            className='banner-map-image'
            alt='food illustration'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export { Banner };

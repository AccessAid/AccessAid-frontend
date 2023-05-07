import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='content-container'>
        <h1 className='heading'>
          Create beautiful website layout with Meraki UI.
        </h1>

        <p className='description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>

        <div className='form-container'>
          <form className='form'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='input-field'
            />

            <button type='button' className='submit-button'>
              Join Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Banner };

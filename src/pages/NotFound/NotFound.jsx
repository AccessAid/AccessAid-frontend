import React from 'react';

import { Link } from 'react-router-dom';

import { HOME } from '../../config/routes';

import './NotFound.css';

const NotFound = () => {
  return (
    <main className='notfound'>
      <div className='notfound__container'>
        <p className='notfound-error'>404</p>
        <h1 className='notfound-title'>Page not found</h1>
        <p className='notfound-message'>
          {"Sorry, we couldn't find the page you're looking for."}
        </p>
        <div className='notfound-links'>
          <div className='notfound-link-1'>
            <Link to={HOME}>Go back Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

import React from 'react';

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
          <a href='#' className='notfound-link-1'>
            Go back home
          </a>
          <a href='#' className='notfound-link-2'>
            Contact support <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

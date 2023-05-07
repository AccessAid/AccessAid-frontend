import React from 'react';
import { Typography } from '@material-tailwind/react';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <img src='/img/logo-ct-dark.png' alt='logo-ct' className='w-10' />
        <ul className='footer__list'>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr />
      <Typography color='blue-gray' className='copyright'>
        &copy; 2023 AccessAid
      </Typography>
    </footer>
  );
};

export { Footer };

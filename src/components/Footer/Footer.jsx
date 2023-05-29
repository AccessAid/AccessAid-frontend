import React from 'react';

import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import { CONTACT } from '../../config/routes/index';
import BrandImage from '../../assets/svg/brand_access.svg';
import GitHubImage from '../../assets/svg/github.svg';
import ReactImage from '../../assets/svg/react.svg';
import SpringImage from '../../assets/svg/spring.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <img src={BrandImage} alt='logo-ct' className='w-16' />
        <ul className='footer__list'>
          <li>
            <Typography color='blue-gray' className='footer__link'>
              <a
                href='https://programacion-es.dev/devathon-edition/'
                target='_blank'
                rel='noopener noreferrer'
              >
                About Devathon
              </a>
            </Typography>
          </li>

          <li>
            <Typography color='blue-gray' className='footer__link'>
              <a
                href='https://github.com/AccessAid'
                target='_blank'
                rel='noopener noreferrer'
              >
                Contribute
              </a>
            </Typography>
          </li>
          <li>
            <Typography color='blue-gray' className='footer__link'>
              <Link to={CONTACT}>Contact Us</Link>
            </Typography>
          </li>
        </ul>
      </div>
      <div className='footer__bottom'>
        <Typography variant='h5' className='copyright'>
          &copy; 2023 AccessAid
        </Typography>
        <div className='social-media__container'>
          <Typography
            as='a'
            href='https://github.com/AccessAid'
            className='social-media'
          >
            <img src={GitHubImage} alt='logo-ct' className='w-10' />
          </Typography>
          <Typography as='a' href='https://react.dev/' className='social-media'>
            <img src={ReactImage} alt='logo-ct' className='w-10' />
          </Typography>
          <Typography
            as='a'
            href='https://spring.io/projects/spring-boot'
            className='social-media'
          >
            <img src={SpringImage} alt='logo-ct' className='w-10' />
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

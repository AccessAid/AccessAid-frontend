import React from 'react';

import PropTypes from 'prop-types';

import GitHubImage from '../../../assets/svg/github.svg';
import LinkedInImage from '../../../assets/svg/linkedin.svg';

import './CardDev.css';

const CardDev = ({ name, role, srcLogo, socialMedia }) => {
  return (
    <div className='card-dev'>
      <img className='card-logo' src={srcLogo} alt='' />

      <h1 className='card-name'>{name}</h1>

      <p className='card-role'>{role}</p>

      <div className='social-links'>
        {socialMedia?.map(({ label, url }) => (
          <a key={url} href={url} className='social-link' aria-label={label}>
            <img
              src={label === 'Github' ? GitHubImage : LinkedInImage}
              alt='logo-ct'
              className='h-10 w-10'
            />
          </a>
        ))}
      </div>
    </div>
  );
};

CardDev.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  srcLogo: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
};

CardDev.defaultProps = {
  name: '',
  role: '',
  srcLogo: '',
  socialMedia: [],
};

export { CardDev };

import React from 'react';
import PropTypes from 'prop-types';
import './CardDev.css';

import GitHubImage from '../../../assets/svg/github.svg';

const CardDev = ({ name, role, srcLogo, socialMedia }) => {
  return (
    <div className='card-dev'>
      <img className='card-logo' src={srcLogo} alt='' />

      <h1 className='card-name'>{name}</h1>

      <p className='card-role'>{role}</p>

      <div className='social-links'>
        {socialMedia?.map(({ label, url }) => (
          <a key={url} href={url} className='social-link' aria-label={label}>
            <img src={GitHubImage} alt='logo-ct' className='w-10' />
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

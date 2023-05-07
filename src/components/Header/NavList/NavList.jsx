import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import './NavList.css';

const NavList = ({ navList }) => {
  return (
    <ul className='navlist'>
      {navList.map(({ label, link, icon }, key) => (
        <Typography
          key={label}
          variant='small'
          color='blue-gray'
          className='navlist__link'
        >
          <Link to={link}>
            <MenuItem className='navlist__menuitem'>
              {React.createElement(icon, { className: 'navlist__link_icon' })}{' '}
              {label}
            </MenuItem>
          </Link>
        </Typography>
      ))}
    </ul>
  );
};

NavList.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
};

export { NavList };

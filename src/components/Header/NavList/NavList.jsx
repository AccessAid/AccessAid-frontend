import React from 'react';

import { MenuItem, Typography } from '@material-tailwind/react';
import {
  UserCircleIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { CONTACT, HOME } from '../../../config/routes';

import './NavList.css';

// nav list component
const navListItems = [
  {
    label: 'Home',
    link: HOME,
    icon: UserCircleIcon,
  },
  {
    label: 'Contact',
    link: CONTACT,
    icon: CubeTransparentIcon,
  },
];

const NavList = () => {
  return (
    <ul className='navlist'>
      {navListItems.map(({ label, link, icon }, key) => (
        <Typography
          key={label}
          as='a'
          href='#'
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

export { NavList };

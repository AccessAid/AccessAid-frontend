import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Typography, MenuItem } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import { logout } from '../../../../store/slices/authSlice';
import { cleanProfileError } from '../../../../store/slices/profileSlice';

const ProfileItem = ({ label, icon, link, isLastItem }) => {
  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(cleanProfileError());
    dispatch(logout());
  };

  return (
    <Link
      key={label}
      to={link}
      onClick={() => {
        if (label === 'Sign Out') {
          console.log('SALIR!!');
          logoutHandle();
        }
      }}
    >
      <MenuItem
        className={`flex items-center gap-2 rounded ${
          isLastItem
            ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
            : ''
        }`}
      >
        {React.createElement(icon, {
          className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
          strokeWidth: 2,
        })}
        <Typography
          as='span'
          variant='small'
          className='font-normal'
          color={isLastItem ? 'red' : 'inherit'}
        >
          {label}
        </Typography>
      </MenuItem>
    </Link>
  );
};

ProfileItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  isLastItem: PropTypes.bool,
};

ProfileItem.defaultProps = {
  isLastItem: false,
};

export { ProfileItem };

import React from 'react';
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from '@material-tailwind/react';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

import './ProfileMenu.css';
import { LOGIN, MAP, PROFILE } from '../../../config/routes';
import { Link } from 'react-router-dom';
import { ProfileItem } from './ProfileItem/ProfileItem';

// profile menu component
const profileMenuItems = [
  {
    label: 'Edit Profile',
    icon: Cog6ToothIcon,
    link: PROFILE,
  },
  {
    label: 'Map',
    icon: InboxArrowDownIcon,
    link: MAP,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
    link: LOGIN,
  },
];

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button variant='text' color='blue-gray' className='profile__avatar'>
          <Avatar
            variant='circular'
            size='sm'
            alt='candice wu'
            className='avatar__img'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-4 w-4 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='profile__menulist'>
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <ProfileItem
              label={label}
              icon={icon}
              link={link}
              isLastItem={isLastItem}
              key={label}
            />
          );
        })}
      </MenuList>
    </Menu>
  );
};

export { ProfileMenu };

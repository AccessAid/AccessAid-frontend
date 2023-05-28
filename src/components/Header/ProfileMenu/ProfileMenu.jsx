import React, { useState } from 'react';

import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { profileMenuItems } from './utils';
import { ProfileItem } from './ProfileItem/ProfileItem';

import './ProfileMenu.css';

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div key={label}>
              <ProfileItem
                label={label}
                icon={icon}
                link={link}
                isLastItem={isLastItem}
              />
            </div>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export { ProfileMenu };

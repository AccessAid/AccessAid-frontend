import React, { useState } from 'react';

import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

import { profileMenuItems } from './utils';
import { ProfileItem } from './ProfileItem/ProfileItem';
import { selectCurrentUserProfile } from '../../../store/slices/profileSlice';

import './ProfileMenu.css';

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileData = useSelector(selectCurrentUserProfile);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button variant='text' color='blue-gray' className='profile__avatar'>
          <Avatar
            variant='circular'
            size='sm'
            alt='candice wu'
            className='avatar__img'
            src={`https://unavatar.io/${
              profileData?.avatarPath || 'no-avatar'
            }`}
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

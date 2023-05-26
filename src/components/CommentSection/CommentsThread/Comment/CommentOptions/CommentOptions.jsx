import React, { useState } from 'react';

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
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

// commentOption menu component
const commentOptionMenuItems = [
  {
    label: 'Edit Comment',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Delete Comment',
    icon: InboxArrowDownIcon,
  },
];
import './CommentOptions.css';

const CommentOptions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button variant='text' color='blue-gray' className='p-2'>
          <EllipsisHorizontalIcon className='h-9 w-9' />
        </Button>
      </MenuHandler>
      <MenuList className='comment-option__menulist'>
        {commentOptionMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === commentOptionMenuItems.length - 1;
          return (
            <div key={label}>
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
            </div>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export { CommentOptions };

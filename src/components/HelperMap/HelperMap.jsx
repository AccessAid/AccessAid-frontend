import React, { useState } from 'react';
import {
  Chip,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from '@material-tailwind/react';
import {
  PaperAirplaneIcon,
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';

import MarkerWhiteIconImage from '../../assets/svg/marker-icon-white.svg';

import './HelperMap.css';

const HelperMap = () => {
  const labelProps = {
    variant: 'small',
    color: 'blue-gray',
    className:
      'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal',
  };
  return (
    <>
      <Chip
        className='my-2 w-full'
        color='blue'
        value='Come back location'
        icon={<PaperAirplaneIcon />}
      />
      <Chip
        className='my-2 w-full'
        color='red'
        value='Searched location'
        icon={<img src={MarkerWhiteIconImage} alt='marker icon image' />}
      />
      <Chip
        className='my-2 w-full'
        color='purple'
        value='Accessible Places'
        icon={<img src={MarkerWhiteIconImage} alt='marker icon image' />}
      />
      {/* <SpeedDial>
        <SpeedDialHandler>
          <IconButton size='lg' className='rounded-full'>
            <PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction className='relative'>
            <HomeIcon className='h-5 w-5' />
            <Typography {...labelProps}>Home</Typography>
          </SpeedDialAction>
          <SpeedDialAction className='relative'>
            <CogIcon className='h-5 w-5' />
            <Typography {...labelProps}>Settings</Typography>
          </SpeedDialAction>
          <SpeedDialAction className='relative'>
            <Square3Stack3DIcon className='h-5 w-5' />
            <Typography {...labelProps}>Pages</Typography>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial> */}
    </>
  );
};

export { HelperMap };

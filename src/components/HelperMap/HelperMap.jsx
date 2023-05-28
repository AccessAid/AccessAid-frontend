import React from 'react';

import { Chip } from '@material-tailwind/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import MarkerWhiteIconImage from '../../assets/svg/marker-icon-white.svg';

import './HelperMap.css';

const HelperMap = () => {
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
    </>
  );
};

export { HelperMap };

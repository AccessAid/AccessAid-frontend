import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
  Avatar,
} from '@material-tailwind/react';
import {
  BuildingOffice2Icon,
  MapIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

import './CardDetails.css';

const CardDetails = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <button
        className='fixed right-10 top-6 z-50 cursor-pointer items-center text-4xl text-white'
        onClick={() => setShowCard(!showCard)}
      >
        {showCard ? 'x' : 'o'}
      </button>
      {showCard && (
        <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center'>
          <div className='h-3/4 w-1/2 -translate-x-full transform bg-blue-600 p-10 text-white transition-all duration-500 ease-in-out'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras porta non ligula
              eget porttitor.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

// CardDetails.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// CardDetails.defaultProps = {
//   text: '',
// };

export { CardDetails };

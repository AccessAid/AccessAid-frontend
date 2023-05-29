import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const OpeningHours = ({ weekdayText }) => {
  const [open, setOpen] = useState(2);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className='flex justify-center'>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className='flex items-center justify-center '
          >
            <span className='flex items-center '>
              Opening Hours
              {open === 2 ? (
                <ChevronUpIcon className='ml-2 h-6 w-6' />
              ) : (
                <ChevronDownIcon className='ml-2 h-6 w-6' />
              )}
            </span>
          </AccordionHeader>
          <AccordionBody className='flex justify-center'>
            <Typography color='gray' className='text-left'>
              {weekdayText.map((day) => {
                const words = day.split(' ');
                const firstWord = words[0];
                const restOfText = words.slice(1).join(' ');
                return (
                  <Typography key={day} variant='small' as='span' color='gray'>
                    <span className='font-bold'>{firstWord}</span> {restOfText}
                  </Typography>
                );
              })}
            </Typography>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};

OpeningHours.propTypes = {
  weekdayText: PropTypes.arrayOf(PropTypes.string),
};

OpeningHours.defaultProps = {
  weekdayText: [],
};

export default OpeningHours;

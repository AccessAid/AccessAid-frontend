import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const OpeningHours = ({ weekdayText }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Opening Hours
          </AccordionHeader>
          <AccordionBody>
            <Typography color='gray'>
              {weekdayText.map((day) => (
                <Typography key={day} variant='small' as='span' color='gray'>
                  {day}
                </Typography>
              ))}
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

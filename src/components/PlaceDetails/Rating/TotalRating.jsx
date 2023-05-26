import { Typography } from '@material-tailwind/react';
import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const TotalRating = ({ totalRating }) => {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row lg:justify-around'>
      <div className='flex items-center justify-start'>
        <Rating
          precision={0.25}
          size='large'
          value={Number(totalRating)}
          readOnly={true}
        />
        <Typography color='blue-gray' className='cursor-default font-normal'>
          {totalRating} Rating
        </Typography>
      </div>
    </div>
  );
};

TotalRating.propTypes = {
  totalRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

TotalRating.defaultProps = {
  totalRating: 0,
};
export default TotalRating;

import { Typography } from '@material-tailwind/react';
import { Rating } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalRatingByPlace } from '../../../store/slices/placesSlice';

const TotalRating = () => {
  const totalRating = useSelector(selectTotalRatingByPlace);
  return (
    <div className='flex flex-col items-center justify-center md:flex-row lg:justify-around'>
      <div className='mb-4 flex flex-col items-center justify-start md:mb-12'>
        <Typography
          color='blue-gray'
          className='mb-2 cursor-default text-2xl font-normal md:mt-3 '
        >
          Total Rating
        </Typography>
        <Rating
          precision={0.25}
          value={totalRating}
          readOnly={true}
          sx={{ fontSize: '3.5rem' }}
        />
        <Typography
          color='blue-gray'
          className=' mt-2 cursor-default text-4xl font-normal md:mt-3'
        >
          {totalRating}
        </Typography>
      </div>
    </div>
  );
};

export default TotalRating;

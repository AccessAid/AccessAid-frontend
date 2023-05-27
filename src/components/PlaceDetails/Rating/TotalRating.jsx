import { Typography } from '@material-tailwind/react';
import { Rating } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalRatingByPlace } from '../../../store/slices/placesSlice';

const TotalRating = () => {
  const totalRating = useSelector(selectTotalRatingByPlace);
  return (
    <div className='flex flex-col items-center justify-center md:flex-row lg:justify-around'>
      <div className='flex items-center justify-start'>
        <Rating
          precision={0.25}
          size='large'
          value={totalRating}
          readOnly={true}
        />
        <Typography color='blue-gray' className='cursor-default font-normal'>
          {totalRating} Rating
        </Typography>
      </div>
    </div>
  );
};

export default TotalRating;

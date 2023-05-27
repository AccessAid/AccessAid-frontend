import { Typography } from '@material-tailwind/react';
import { Rating } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalRatingByPlace } from '../../../store/slices/placesSlice';

const TotalRating = () => {
  const totalRating = useSelector(selectTotalRatingByPlace);
  return (
    <div className='flex flex-col items-center justify-center md:flex-row lg:justify-around'>
      <div className='flex flex-col items-center justify-start md:flex-row'>
        <Rating
          precision={0.25}
          size='large'
          value={totalRating}
          readOnly={true}
        />
        <Typography
          color='blue-gray'
          className='ml-2 mt-2 cursor-default font-normal md:mt-0'
        >
          {totalRating} Rating
        </Typography>
      </div>
    </div>
  );
};

export default TotalRating;

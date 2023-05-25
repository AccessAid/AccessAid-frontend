/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react';

const OpeningHours = ({ weekdayText }) => {
  return (
    <>
      <div>
        <Typography color='gray'>
          <>
            {weekdayText.map((day) => (
              <Typography key={day} variant='small' as='span' color='gray'>
                {day}
              </Typography>
            ))}
          </>
        </Typography>
      </div>
    </>
  );
};

export default OpeningHours;

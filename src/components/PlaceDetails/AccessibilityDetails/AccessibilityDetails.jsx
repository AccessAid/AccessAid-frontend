import { Chip, Tooltip, Typography } from '@material-tailwind/react';
import { accessibilityListDescription } from '../../MapComponent/MarkerComponent/util';

const AccessibilityDetails = () => {
  return (
    <div className='align-center group mx-auto mt-8 flex flex-wrap justify-around gap-8'>
      {accessibilityListDescription.map(({ name, description }) => (
        <Tooltip
          key={name}
          content={
            <div className='z-10 '>
              <Typography color='white' className='font-medium'>
                {description}
              </Typography>
            </div>
          }
          className='cursor-default'
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Chip
            color='indigo'
            value={name}
            className='flex w-20 justify-center p-1 text-xs font-normal capitalize'
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default AccessibilityDetails;

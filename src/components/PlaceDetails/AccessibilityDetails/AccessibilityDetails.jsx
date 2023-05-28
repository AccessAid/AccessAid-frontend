import { Chip, Tooltip, Typography } from '@material-tailwind/react';
import { accessibilityListDescription } from '../../MapComponent/MarkerComponent/util';

const AccessibilityDetails = () => {
  return (
    <div className='group mx-auto mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
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
          className='flex cursor-default items-center justify-center'
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Chip
            value={name}
            className='flex w-full justify-center bg-quaternary p-1 text-lg font-medium capitalize'
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default AccessibilityDetails;

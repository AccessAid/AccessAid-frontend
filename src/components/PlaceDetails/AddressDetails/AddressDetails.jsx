/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react';

const AddressDetails = ({ name, address, phone, website }) => {
  return (
    <>
      <div>
        <Typography
          variant='h4'
          color='gray'
          className='justify-start font-bold'
        >
          {name}
        </Typography>
        <Typography variant='normal' color='gray' className='flex '>
          {address}
        </Typography>
        <Typography variant='normal' color='gray' className='flex font-bold'>
          {' '}
          Phone: <span className='font-normal'>{phone}</span>
        </Typography>
        <Typography
          variant='normal'
          as='a'
          href={website}
          target='_blank'
          color='gray'
          className='flex cursor-pointer items-center gap-1 text-sm font-bold'
        >
          @Website
        </Typography>
      </div>
    </>
  );
};

export default AddressDetails;

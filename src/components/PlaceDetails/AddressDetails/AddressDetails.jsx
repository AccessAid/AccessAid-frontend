import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import React from 'react';

const AddressDetails = ({ name, address, phone, website }) => {
  return (
    <>
      <div className='m-9 text-center'>
        <Typography variant='h4' color='gray' className='mb-2 font-bold'>
          {name}
        </Typography>
        <Typography variant='paragraph' color='gray' className='font-normal'>
          {address}
        </Typography>
        <Typography variant='paragraph' color='gray' className='font-bold'>
          {' '}
          Phone: <span className='font-normal'>{phone}</span>
        </Typography>
        <Typography
          variant='paragraph'
          as='a'
          href={website}
          target='_blank'
          color='gray'
          className='flex cursor-pointer items-center justify-center gap-1 text-xl font-bold text-primary-dark'
        >
          {website ? '@Website' : "This place don't have a website"}
        </Typography>
      </div>
    </>
  );
};

AddressDetails.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
};

AddressDetails.defaultProps = {
  name: '',
  address: '',
  phone: '',
};

export default AddressDetails;

import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Chip } from '@material-tailwind/react';

const ChipAccessibility = ({ value }) => {
  return (
    <Chip
      color='indigo'
      value={value}
      className='flex w-20 justify-center p-1 text-xs font-normal capitalize'
      icon={<CheckIcon className='h-4 w-4' />}
    />
  );
};

ChipAccessibility.propTypes = {
  value: PropTypes.string.isRequired,
};

ChipAccessibility.defaultProps = {
  value: '',
};

export { ChipAccessibility };

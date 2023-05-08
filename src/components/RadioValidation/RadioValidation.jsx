import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, Typography } from '@material-tailwind/react';

const RadioValidation = ({ nameField, controllerProps, rules, inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        {...controllerProps}
        control={control}
        name={nameField}
        rules={rules}
        render={({ field }) => <Checkbox {...field} {...inputProps} />}
      />
      {Boolean(errors[nameField]) && errors[nameField]?.message && (
        <Typography
          variant='small'
          className='mt-0 flex items-center font-normal text-red-500'
        >
          {errors[nameField]?.message}
        </Typography>
      )}
    </>
  );
};

RadioValidation.propTypes = {
  nameField: PropTypes.string.isRequired,
  controllerProps: PropTypes.object,
  rules: PropTypes.object,
  inputProps: PropTypes.object,
};

RadioValidation.defaultProps = {
  controllerProps: {},
  rules: {},
  inputProps: {},
};

export { RadioValidation };

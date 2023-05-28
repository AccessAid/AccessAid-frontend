import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Typography } from '@material-tailwind/react';

const InputValidation = ({
  nameField,
  controllerProps,
  rules,
  inputProps,
  selectorApiError,
  customValidation,
}) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const apiError = useSelector(selectorApiError);

  console.log('apiError****', apiError);

  return (
    <>
      <Controller
        {...controllerProps}
        control={control}
        name={nameField}
        rules={{
          ...rules,
          validate: (value) => customValidation(value, watch),
        }}
        render={({ field }) => (
          <Input
            {...field}
            {...inputProps}
            error={
              Boolean(errors[nameField]) ||
              (Boolean(apiError) && apiError?.includes(nameField))
            }
          />
        )}
      />
      {Boolean(errors[nameField]) && errors[nameField]?.message && (
        <Typography
          variant='small'
          className='mt-0 flex items-center font-normal text-red-500'
        >
          {errors[nameField]?.message}
        </Typography>
      )}
      {apiError?.includes(nameField) && (
        <Typography
          variant='small'
          className='mt-0 flex items-center font-normal text-red-500'
        >
          {apiError}
        </Typography>
      )}
    </>
  );
};

InputValidation.propTypes = {
  nameField: PropTypes.string.isRequired,
  controllerProps: PropTypes.object,
  rules: PropTypes.object,
  inputProps: PropTypes.object,
  selectorApiError: PropTypes.func,
  customValidation: PropTypes.func,
};

InputValidation.defaultProps = {
  controllerProps: {},
  rules: {},
  inputProps: {},
  selectorApiError: (state) => state.auth.error,
  customValidation: (value, control) => {},
};

export { InputValidation };

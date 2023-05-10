import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form';
import { Textarea, Typography } from '@material-tailwind/react';

const TextareaValidation = ({
  nameField,
  controllerProps,
  rules,
  inputProps,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const apiError = useSelector((state) => state.auth.error);

  return (
    <>
      <Controller
        {...controllerProps}
        control={control}
        name={nameField}
        rules={rules}
        render={({ field }) => (
          <Textarea
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

TextareaValidation.propTypes = {
  nameField: PropTypes.string.isRequired,
  controllerProps: PropTypes.object,
  rules: PropTypes.object,
  inputProps: PropTypes.object,
};

TextareaValidation.defaultProps = {
  controllerProps: {},
  rules: {},
  inputProps: {},
};

export { TextareaValidation };

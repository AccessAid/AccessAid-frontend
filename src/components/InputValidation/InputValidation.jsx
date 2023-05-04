import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@material-tailwind/react';

const InputValidation = ({ nameField, controllerProps, rules, inputProps }) => {
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
        <p>{errors[nameField]?.message}</p>
      )}
      {apiError?.includes(nameField) && <p>{apiError}</p>}
    </>
  );
};

InputValidation.propTypes = {
  nameField: PropTypes.string.isRequired,
  controllerProps: PropTypes.object,
  rules: PropTypes.object,
  inputProps: PropTypes.object,
};

InputValidation.defaultProps = {
  controllerProps: {},
  rules: {},
  inputProps: {},
};

export { InputValidation };

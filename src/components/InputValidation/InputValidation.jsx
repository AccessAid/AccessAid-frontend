import React from 'react';
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

export default InputValidation;

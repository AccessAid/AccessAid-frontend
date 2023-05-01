import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@material-tailwind/react';

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
        <p>{errors[nameField]?.message}</p>
      )}
    </>
  );
};

export default RadioValidation;

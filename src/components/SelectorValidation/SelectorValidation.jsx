import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form';
import { Select, Option, Typography } from '@material-tailwind/react';

const SelectorValidation = ({
  nameField,
  controllerProps,
  rules,
  selectProps,
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
          <Select
            {...field}
            {...selectProps}
            error={
              Boolean(errors[nameField]) ||
              (Boolean(apiError) && apiError?.includes(nameField))
            }
          >
            {selectProps.options.map((option, index) => {
              const { contentOption, ...optionProps } = option;

              return (
                <Option key={index} {...optionProps}>
                  {contentOption}
                </Option>
              );
            })}
          </Select>
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

SelectorValidation.propTypes = {
  nameField: PropTypes.string.isRequired,
  controllerProps: PropTypes.object,
  rules: PropTypes.object,
  selectProps: PropTypes.object,
};

SelectorValidation.defaultProps = {
  controllerProps: {},
  rules: {},
  selectProps: {},
};

export { SelectorValidation };

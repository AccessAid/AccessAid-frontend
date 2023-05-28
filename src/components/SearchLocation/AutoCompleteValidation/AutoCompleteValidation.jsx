import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography } from '@material-tailwind/react';
import Autocomplete from 'react-google-autocomplete';

import './AutoCompleteValidation.css';

const AutoCompleteValidation = ({
  nameField,
  controllerProps,
  rules,
  autoCompleteProps,
  getCoordinates,
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
        render={({ field: { onChange } }) => (
          <div className='input-autocomplete'>
            <Autocomplete
              {...autoCompleteProps}
              options={{
                types: [],
              }}
              apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
              onPlaceSelected={(place) => {
                getCoordinates({
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                });
                onChange(place.formatted_address);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
            />
          </div>
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

AutoCompleteValidation.propTypes = {
  nameField: PropTypes.string.isRequired,
  controllerProps: PropTypes.object,
  rules: PropTypes.object,
  autoCompleteProps: PropTypes.object,
  getCoordinates: PropTypes.func,
};

AutoCompleteValidation.defaultProps = {
  controllerProps: {},
  rules: {},
  autoCompleteProps: {},
  getCoordinates: () => {},
};

export { AutoCompleteValidation };

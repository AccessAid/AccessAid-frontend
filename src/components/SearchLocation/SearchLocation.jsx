import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography } from '@material-tailwind/react';
import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { SelectorValidation } from '../SelectorValidation/SelectorValidation';
import {
  selectCurrentSearch,
  selectCurrentSearchCoordinates,
  setCoordinatesMap,
  setCurrentSearch,
} from '../../store/slices/mapSlice';
import { AutoCompleteValidation } from './AutoCompleteValidation/AutoCompleteValidation';
import { getAccessiblePlaces } from '../../store/actions/mapActions';
import { typePlacesList } from './utils';

const SearchLocation = ({ mapObject }) => {
  const hookFormMethods = useForm();
  const dispatch = useDispatch();
  const currentSearchData = useSelector(selectCurrentSearch);
  const currentSearchCoordinates = useSelector(selectCurrentSearchCoordinates);

  const navigate = useNavigate();

  const [coordinatesSearch, setCoordinatesSearch] = useState({
    lat: 0,
    lng: 0,
  });

  const onSubmit = async (data) => {
    console.log('data SearchLocation', data);

    dispatch(
      setCurrentSearch({
        ...currentSearchData,
        ...data,
        ...coordinatesSearch,
      }),
    );
    try {
      const resultAction = await dispatch(getAccessiblePlaces());

      if (resultAction.payload) {
        console.log(`resultAction =`, resultAction.payload);

        toast.success('Search done successfully!', {
          autoClose: 1000,
        });

        toast.onChange((payload) => {
          if (payload.status === 'removed') {
          }
          if (payload.status === 'added') {
          }
          if (payload.status === 'updated') {
          }
        });

        dispatch(setCoordinatesMap({ ...coordinatesSearch }));
      }
    } catch (error) {
      console.log(error);
      toast.error('There is an error!', {
        autoClose: 1500,
      });
    }
  };

  return (
    <Card color='transparent' shadow={false}>
      <Typography variant='h5' color='blue-gray'>
        Search Location
      </Typography>
      <FormProvider {...hookFormMethods}>
        <form className='mb-2 mt-2 w-full '>
          <div className='flex flex-col gap-2 sm:flex-row'>
            <div className='w-full'>
              <AutoCompleteValidation
                nameField='address'
                controllerProps={{ defaultValue: '' }}
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your search query.',
                  },
                }}
                getCoordinates={(coordinates) => {
                  setCoordinatesSearch({ ...coordinates });
                }}
              />
            </div>
            <div className='w-full'>
              <SelectorValidation
                nameField='placeType'
                controllerProps={{ defaultValue: '' }}
                selectProps={{
                  label: 'Place Type',
                  options: [...new Map(Object.entries(typePlacesList))].map(
                    ([key, valueType]) => ({
                      contentOption: valueType,
                      value: key,
                    }),
                  ),
                  className: '',
                }}
                rules={{
                  required: {
                    value: true,
                    message: 'Please select an option.',
                  },
                }}
              />
            </div>
            <div className='w-full sm:w-auto'>
              <Button
                onClick={hookFormMethods.handleSubmit(onSubmit)}
                disabled={
                  Object.keys(hookFormMethods.formState.errors).length > 0
                }
                className='px-auto flex w-full justify-center py-2 sm:w-auto'
              >
                <MagnifyingGlassIcon className='h-6 w-6' />
              </Button>
            </div>
            <div
              className='flex w-full cursor-pointer items-center justify-center px-2 sm:w-auto'
              onClick={() => {
                mapObject?.panTo(currentSearchCoordinates);
              }}
            >
              <PaperAirplaneIcon className='h-6 w-6' />
            </div>
          </div>
        </form>
      </FormProvider>
      <ToastContainer />
    </Card>
  );
};

SearchLocation.propTypes = {
  mapObject: PropTypes.shape({
    panTo: PropTypes.func,
  }),
};

SearchLocation.defaultProps = {
  mapObject: {},
};

export { SearchLocation };

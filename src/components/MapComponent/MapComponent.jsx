/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Button, Typography } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { login, getUserData } from './../../store/actions/authActions';
import { cleanApiError } from '../../store/slices/authSlice';
import { InputValidation } from '../InputValidation/InputValidation';
import { HOME, SIGNUP } from '../../config/routes';

import './MapComponent.css';
import { MarkerComponent } from './MarkerComponent/MarkerComponent';
import {
  selectAccessiblePlaces,
  selectCoordinatesMap,
  selectCurrentSearch,
  selectCurrentSearchCoordinates,
  selectPlaceSearched,
  setCoordinatesMap,
  setCurrentSearch,
} from '../../store/slices/mapSlice';
import { getAccessiblePlaces } from '../../store/actions/mapActions';
import { getAccessiblePlaceDetails } from '../../store/actions/mapActions';

const MapComponent = ({ setMapObject }) => {
  const dispatch = useDispatch();
  const currentPlaceSearched = useSelector(selectPlaceSearched);
  const currentAccessiblePlaces = useSelector(selectAccessiblePlaces);
  const currentSearchData = useSelector(selectCurrentSearch);
  const coordinatesMap = useSelector(selectCoordinatesMap);

  const DEFAULT_COORDINATES = {
    lat: 40.4167754,
    lng: -3.7037902,
  };

  useEffect(() => {
    const onSuccess = ({ coords: { latitude, longitude } }) => {
      console.log('FUNCIONA LA GEO!');
      dispatch(
        setCurrentSearch({
          ...currentSearchData,
          lat: latitude,
          lng: longitude,
        }),
      );

      (async () => {
        await dispatch(getAccessiblePlaces());
      })();

      dispatch(setCoordinatesMap({ lat: latitude, lng: longitude }));
    };

    const onError = (error) => {
      dispatch(
        setCurrentSearch({
          ...currentSearchData,
          lat: DEFAULT_COORDINATES.lat,
          lng: DEFAULT_COORDINATES.lng,
        }),
      );

      (async () => {
        await dispatch(getAccessiblePlaces());
      })();

      dispatch(setCoordinatesMap(DEFAULT_COORDINATES));
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return (
    <div className={'map-container-component'}>
      <GoogleMapReact
        mapContainer
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        center={coordinatesMap}
        zoom={16}
        options={{
          fullscreenControl: false,
        }}
        onChange={(e) => {
          dispatch(setCoordinatesMap({ lat: e.center.lat, lng: e.center.lng }));
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          console.log('mappp', map);
          setMapObject(map);
        }}
      >
        {/* Marcador para la ubicación del usuario */}
        <div lat={currentSearchData.lat} lng={currentSearchData.lng}>
          <MarkerComponent
            onlyShowTooltip
            placesDetails={{
              name: currentSearchData?.address
                ? currentSearchData.address
                : currentPlaceSearched?.name,
              latitude: currentSearchData.lat,
              longitude: currentSearchData.lng,
            }}
          />
        </div>
        {/* Marcadores para los lugares relacionados con la búsqueda */}
        {currentAccessiblePlaces?.map((place) => (
          <div
            key={place.placeId}
            lat={place.latitude ? place.latitude : place.lat}
            lng={place.longitude ? place.longitude : place.lng}
          >
            <MarkerComponent
              placesDetails={place}
              isPlace
              onClickIcon={async (openCardDetails = () => {}) => {
                try {
                  const result = await dispatch(
                    getAccessiblePlaceDetails(place.placeId),
                  );

                  if (
                    result?.payload?.accessibilityData &&
                    result?.payload?.formattedAddress
                  ) {
                    openCardDetails(true);
                  } else {
                    toast.error('There was an error opening place details', {
                      autoClose: 2000,
                    });
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </div>
        ))}
      </GoogleMapReact>
      <ToastContainer />
    </div>
  );
};

MapComponent.propTypes = {
  setMapObject: PropTypes.func,
};

MapComponent.defaultProps = {
  setMapObject: () => {},
};

export { MapComponent };

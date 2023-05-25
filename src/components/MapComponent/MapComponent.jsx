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
import { HOME, PLACE_DETAIL, SIGNUP } from '../../config/routes';

import './MapComponent.css';
import { MarkerComponent } from './MarkerComponent/MarkerComponent';
import {
  selectAccessiblePlaces,
  selectCoordinatesMap,
  selectCurrentSearch,
  selectCurrentSearchCoordinates,
  selectFirstTimeRenderMap,
  selectPlaceSearched,
  setCoordinatesMap,
  setCurrentSearch,
  setFirstTimeRenderMap,
} from '../../store/slices/mapSlice';
import { getAccessiblePlaces } from '../../store/actions/mapActions';
import { getAccessiblePlaceDetails } from '../../store/actions/mapActions';
import {
  addPlace,
  getPlaceDetailsFromMapSlide,
  getTotalRatingByPlace,
} from '../../store/actions/placesActions';
import { selectCurrentIdSelected } from '../../store/slices/placesSlice';

const MapComponent = ({ setMapObject }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPlaceSearched = useSelector(selectPlaceSearched);
  const currentAccessiblePlaces = useSelector(selectAccessiblePlaces);
  const currentSearchData = useSelector(selectCurrentSearch);
  const coordinatesMap = useSelector(selectCoordinatesMap);
  const firstTimeRenderMap = useSelector(selectFirstTimeRenderMap);
  const currentIdSelected = useSelector(selectCurrentIdSelected);

  const DEFAULT_COORDINATES = {
    lat: 40.4167754,
    lng: -3.7037902,
  };

  useEffect(() => {
    if (!firstTimeRenderMap) {
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
        dispatch(setFirstTimeRenderMap(true));
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
        dispatch(setFirstTimeRenderMap(true));
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getAccessiblePlaces());
  //   })();
  // }, [currentSearchData]);

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
                  const multipleActions = [
                    dispatch(getAccessiblePlaceDetails(place.placeId)),
                    dispatch(addPlace({ apiPlaceId: place.placeId })),
                  ];

                  const results = await Promise.allSettled(multipleActions);

                  // Procesar los resultados de getAccessiblePlaceDetails
                  const placeDetailsResult = results[0];
                  if (
                    placeDetailsResult.status === 'fulfilled' &&
                    placeDetailsResult.value.payload.accessibilityData &&
                    placeDetailsResult.value.payload.formattedAddress
                  ) {
                    openCardDetails(true);
                  } else {
                    toast.error('There was an error opening place details', {
                      autoClose: 2500,
                    });
                  }

                  // Procesar los resultados de addPlace
                  const addPlaceResult = results[1];
                  if (
                    addPlaceResult.status === 'fulfilled' &&
                    addPlaceResult.value.payload.accessibilityData &&
                    addPlaceResult.value.payload.formattedAddress
                  ) {
                    toast.info(
                      'This place have not been rated or commented yet, be first one',
                      {
                        autoClose: 3500,
                      },
                    );
                  } else {
                    toast.info(
                      'This site already have been visited by other users',
                      {
                        autoClose: 3500,
                      },
                    );
                  }
                } catch (error) {
                  console.log(error);
                  toast.error(
                    "We're suffering problems on load this place, come back later",
                    {
                      autoClose: 3500,
                    },
                  );
                }
              }}
              onClickMoreDetail={async () => {
                try {
                  dispatch(getPlaceDetailsFromMapSlide());

                  if (currentIdSelected) {
                    const totalRating = await dispatch(
                      getTotalRatingByPlace(currentIdSelected),
                    );
                    if (totalRating?.payload?.totalRating) {
                      navigate(PLACE_DETAIL);
                    } else {
                      toast.error(
                        "We're suffering problems on load total rating of this place, come back later",
                        {
                          autoClose: 3500,
                        },
                      );
                    }
                  } else {
                    toast.error(
                      "We're suffering problems on load total rating of this place, come back later",
                      {
                        autoClose: 3500,
                      },
                    );
                  }
                } catch (error) {
                  toast.error(
                    "We're suffering problems on load total rating of this place, come back later",
                    {
                      autoClose: 3500,
                    },
                  );
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

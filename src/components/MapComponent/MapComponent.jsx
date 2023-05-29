/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { PLACE_DETAIL } from '../../config/routes';
import {
  selectAccessiblePlaces,
  selectCoordinatesMap,
  selectCurrentSearch,
  selectFirstTimeRenderMap,
  selectPlaceSearched,
  setCoordinatesMap,
  setCurrentSearch,
  setFirstTimeRenderMap,
} from '../../store/slices/mapSlice';
import {
  getAccessiblePlaces,
  getAccessiblePlaceDetails,
} from '../../store/actions/mapActions';
import {
  addPlace,
  getPlaceDetailsFromMapSlide,
  getTotalRatingByPlace,
} from '../../store/actions/placesActions';
import { selectCurrentIdSelected } from '../../store/slices/placesSlice';
import './MapComponent.css';
import { MarkerComponent } from './MarkerComponent/MarkerComponent';

import './MapComponent.css';

// eslint-disable-next-line react/prop-types
const MarkerBasic = ({ children, lat, lng }) => {
  return (
    <div lat={lat} lng={lng}>
      {children}
    </div>
  );
};

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
          setMapObject(map);
        }}
      >
        {/* Marcador para la ubicación del usuario */}
        <MarkerBasic lat={currentSearchData.lat} lng={currentSearchData.lng}>
          {' '}
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
        </MarkerBasic>

        {/* Marcadores para los lugares relacionados con la búsqueda */}
        {currentAccessiblePlaces?.map((place) => (
          <MarkerBasic
            key={place.placeId}
            lat={place.latitude ? place.latitude : place.lat}
            lng={place.longitude ? place.longitude : place.lng}
          >
            <MarkerComponent
              placesDetails={place}
              isPlace
              onClickIcon={async (openCardDetails = () => {}) => {
                try {
                  const placeDetailsResult = await dispatch(
                    getAccessiblePlaceDetails(place.placeId),
                  );

                  if (
                    placeDetailsResult.payload.accessibilityData &&
                    placeDetailsResult.payload.formattedAddress
                  ) {
                    if (placeDetailsResult.payload?.id) {
                      dispatch(getPlaceDetailsFromMapSlide());
                      openCardDetails(true);

                      return;
                    }
                    const addPlaceResult = await dispatch(
                      addPlace({ apiPlaceId: place.placeId }),
                    );

                    openCardDetails(true);

                    if (addPlaceResult.payload?.id) {
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
                  } else {
                    toast.error('There was an error opening place details', {
                      autoClose: 2500,
                    });
                  }
                } catch (error) {
                  toast.error(
                    "We're suffering problems on load this place, come back later",
                    {
                      autoClose: 3500,
                    },
                  );
                }
              }}
              onClickMoreDetail={() => {
                navigate(PLACE_DETAIL);
              }}
            />
          </MarkerBasic>
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

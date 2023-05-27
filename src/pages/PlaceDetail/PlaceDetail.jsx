import React, { useEffect } from 'react';

import { PlaceDetailsCard } from '../../components/PlaceDetails/PlaceDetailsCard';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import './PlaceDetail.css';
import { MAP } from '../../config/routes';

import { persistCurrentPlaceDetails } from '../../store/actions/placesActions';

const PlaceDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const persistPlaceData = await dispatch(persistCurrentPlaceDetails());
      console.log('persistPlaceData*****', persistPlaceData);
      if (persistPlaceData?.payload?.message) {
        navigate(MAP);
        toast.info('Remember first select a place on the map', {
          autoClose: 3000,
        });
      }
    })();
  }, [persistCurrentPlaceDetails]);

  return (
    <>
      <PlaceDetailsCard />
      <ToastContainer />
    </>
  );
};

export default PlaceDetail;

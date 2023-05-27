import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import React from 'react';

import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { selectCurrentPlaceDetail } from '../../store/slices/placesSlice';
import { PlacePhoto } from '../PlacePhoto/PlacePhoto';
import AccessibilityDetails from './AccessibilityDetails/AccessibilityDetails';
import AddressDetails from './AddressDetails/AddressDetails';
import OpeningHours from './OpeningHours/OpeningHours';
import './PlaceDetails.css';
import RatingByUser from './Rating/RatingByUser';
import TotalRating from './Rating/TotalRating';

const PlaceDetails = () => {
  const place = useSelector(selectCurrentPlaceDetail);

  return (
    <div className='place-detail-container text-center'>
      <div className='m-auto w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-3/4'>
        <Card className='custom-card w-full shadow-xl'>
          <div className='relative mx-auto h-[50vh] sm:h-[50vh] md:h-[40vh] lg:h-[30vh] xl:h-[30vh]'>
            <PlacePhoto
              photoReference={
                place?.accessibilityData?.photos?.length > 0
                  ? place?.accessibilityData?.photos[0]?.photoReference
                  : '#'
              }
            >
              {(imageUrl) => {
                return (
                  <img
                    className='h-full w-full rounded-lg object-cover'
                    src={imageUrl}
                    alt='Place Image'
                  />
                );
              }}
            </PlacePhoto>
          </div>

          <CardBody>
            <div className='flex flex-col items-center justify-center md:flex-row lg:justify-around'>
              <div className='flex items-center justify-start'>
                <TotalRating />
              </div>
              <div className='flex items-center justify-around'>
                <RatingByUser />
              </div>
            </div>
            <div className='grid grid-flow-row md:grid-cols-2'>
              <div className='justify-center'>
                <AddressDetails
                  name={place?.accessibilityData.name}
                  address={place?.formattedAddress}
                  phone={place?.accessibilityData.phone}
                  website={place?.accessibilityData.website}
                />
              </div>
              <OpeningHours
                weekdayText={
                  place?.accessibilityData?.openingHours?.weekdayText
                }
              />
            </div>
            <AccessibilityDetails />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlaceDetails;

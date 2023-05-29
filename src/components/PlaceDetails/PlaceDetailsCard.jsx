import React from 'react';

import { Card, CardBody } from '@material-tailwind/react';
import { useSelector } from 'react-redux';

import { selectCurrentPlaceDetail } from '../../store/slices/placesSlice';
import { PlacePhoto } from '../PlacePhoto/PlacePhoto';
import AccessibilityDetails from './AccessibilityDetails/AccessibilityDetails';
import AddressDetails from './AddressDetails/AddressDetails';
import OpeningHours from './OpeningHours/OpeningHours';
import RatingByUser from './Rating/RatingByUser';
import TotalRating from './Rating/TotalRating';

import './PlaceDetailsCard.css';

const PlaceDetailsCard = () => {
  const place = useSelector(selectCurrentPlaceDetail);

  return (
    <Card className='mx-4 my-32 border-4 pb-4 text-center shadow-xl sm:mx-auto sm:w-5/6'>
      <div className='mx-auto mt-9 h-[30vh] md:h-[40vh] lg:h-[30vh] xl:h-[30vh]'>
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
        <div className='grid grid-flow-row lg:grid-cols-2'>
          <TotalRating />

          <div className='flex items-center justify-center'>
            <RatingByUser />
          </div>
        </div>
        <div className='grid grid-flow-row md:grid-cols-2'>
          <div className=''>
            <div className='mb-4 '>
              <AddressDetails
                name={place?.accessibilityData?.name}
                address={place?.formattedAddress}
                phone={place?.accessibilityData?.phone}
                website={place?.accessibilityData?.website}
              />
            </div>
            <div className='m-6 '>
              <AccessibilityDetails />
            </div>
          </div>
          <div className='md:col-span-1 md:mt-4'>
            <OpeningHours
              weekdayText={place?.accessibilityData?.openingHours?.weekdayText}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export { PlaceDetailsCard };

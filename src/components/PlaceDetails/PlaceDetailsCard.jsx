import { Card, CardBody } from '@material-tailwind/react';
import React from 'react';

import { useSelector } from 'react-redux';
import { selectCurrentPlaceDetail } from '../../store/slices/placesSlice';
import { PlacePhoto } from '../PlacePhoto/PlacePhoto';
import AccessibilityDetails from './AccessibilityDetails/AccessibilityDetails';
import AddressDetails from './AddressDetails/AddressDetails';
import OpeningHours from './OpeningHours/OpeningHours';
import './PlaceDetailsCard.css';
import RatingByUser from './Rating/RatingByUser';
import TotalRating from './Rating/TotalRating';

const PlaceDetailsCard = () => {
  const place = useSelector(selectCurrentPlaceDetail);

  return (
    <div className='place-detail-container text-center'>
      <div className='m-auto w-full sm:w-5/6'>
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
            <div className='grid grid-flow-row md:grid-cols-2'>
              <div className='flex items-center justify-center'>
                <TotalRating />
              </div>
              <div className='flex items-center justify-center'>
                <RatingByUser />
              </div>
            </div>
            <div className='grid grid-flow-row md:grid-cols-2'>
              <div className='-mt-0 md:col-span-1 md:-mt-16'>
                <div className='mb-4 '>
                  <AddressDetails
                    name={place?.accessibilityData.name}
                    address={place?.formattedAddress}
                    phone={place?.accessibilityData.phone}
                    website={place?.accessibilityData.website}
                  />
                </div>
                <div className='mb-4 mt-4 md:mb-14 md:mt-12 '>
                  <AccessibilityDetails />
                </div>
              </div>
              <div className='md:col-span-1 md:mt-4'>
                <OpeningHours
                  weekdayText={
                    place?.accessibilityData?.openingHours?.weekdayText
                  }
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { PlaceDetailsCard };

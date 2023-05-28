import React, { useEffect, useRef, useState } from 'react';

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
  Tooltip,
} from '@material-tailwind/react';

import MarkerIconImage from '../../../assets/svg/marker-icon.svg';
import MarkerPurpleIconImage from '../../../assets/svg/marker-icon-purple.svg';

import { PlacePhoto } from '../../PlacePhoto/PlacePhoto';
import { accessibilityListChip } from './util';
import { defaultProps, propTypes } from './propTypes';
import { ChipAccessibility } from './ChipAccessibility/ChipAccessibility';

import './MarkerComponent.css';

const MarkerComponent = ({
  placesDetails,
  onlyShowTooltip,
  isPlace,
  onClickIcon,
  onClickMoreDetail,
}) => {
  const imageRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const triggers = {
    onMouseEnter: () => {
      if (!openPopover) {
        setOpenTooltip(true);
      }
    },
    onMouseLeave: () => setOpenTooltip(false),
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        setOpenPopover(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [imageRef]);

  useEffect(() => {
    if (openPopover) {
      setOpenTooltip(false);
    }
  }, [openPopover]);

  return (
    <>
      {onlyShowTooltip ? (
        <Tooltip
          open={openTooltip}
          content={
            <div className='z-10 '>
              <Typography color='white' className='font-medium'>
                {placesDetails?.name
                  ? placesDetails?.name
                  : placesDetails?.accessibilityData?.name}
              </Typography>
            </div>
          }
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <img
            className='h-12 w-12 '
            src={isPlace ? MarkerPurpleIconImage : MarkerIconImage}
            alt='marker icon image'
            ref={imageRef}
            {...triggers}
          />
        </Tooltip>
      ) : (
        <>
          {openPopover ? (
            <Popover
              open={openPopover}
              handler={setOpenPopover}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
                <img
                  className='h-12 w-12 '
                  src={isPlace ? MarkerPurpleIconImage : MarkerIconImage}
                  alt='marker icon image'
                  ref={imageRef}
                />
              </PopoverHandler>
              <PopoverContent className=' z-20 w-3/5 !shadow-2xl sm:w-2/6 lg:w-1/5'>
                <div className='mb-2 gap-2.5'>
                  <PlacePhoto
                    photoReference={
                      placesDetails?.accessibilityData?.photos?.length > 0
                        ? placesDetails?.accessibilityData?.photos[0]
                            ?.photoReference
                        : '#'
                    }
                  >
                    {(imageUrl) => {
                      return (
                        <img
                          className='  w-full rounded-lg '
                          src={imageUrl}
                          alt='Place Image'
                        />
                      );
                    }}
                  </PlacePhoto>
                </div>
                <Typography
                  variant='h6'
                  color='blue-gray'
                  className='mb-2 flex items-center gap-2 font-medium'
                >
                  <span>{placesDetails?.accessibilityData?.name}</span>
                </Typography>
                <Typography
                  variant='small'
                  color='gray'
                  className='font-normal'
                >
                  {' '}
                  {placesDetails?.formattedAddress}
                </Typography>
                <Typography variant='small' color='gray' className='font-bold'>
                  {' '}
                  Phone:{' '}
                  <span className='font-normal'>
                    {placesDetails?.accessibilityData?.phone}
                  </span>
                </Typography>

                <Typography
                  as='a'
                  href={placesDetails?.accessibilityData?.website}
                  target='_blank'
                  color='gray'
                  className='flex cursor-pointer items-center gap-1 text-sm font-bold'
                >
                  @Website
                </Typography>

                <Button
                  variant='gradient'
                  color='blue'
                  size='sm'
                  className='mt-3 w-full font-medium capitalize'
                  onClick={() => {
                    onClickMoreDetail();
                  }}
                >
                  More Details
                </Button>

                <div className='mx-auto mt-4 flex flex-wrap justify-center gap-2'>
                  {accessibilityListChip.map((value, index) => (
                    <ChipAccessibility
                      key={`${index}-${value}`}
                      value={value}
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Tooltip
              open={openTooltip}
              content={
                <div className='z-10 '>
                  <Typography color='white' className='font-medium'>
                    {placesDetails?.name
                      ? placesDetails?.name
                      : placesDetails?.accessibilityData?.name}
                  </Typography>
                </div>
              }
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <img
                className='h-12 w-12 '
                src={isPlace ? MarkerPurpleIconImage : MarkerIconImage}
                alt='marker icon image'
                ref={imageRef}
                onClick={() => {
                  onClickIcon(setOpenPopover);
                }}
                {...triggers}
              />
            </Tooltip>
          )}
        </>
      )}
    </>
  );
};

MarkerComponent.propTypes = propTypes;

MarkerComponent.defaultProps = defaultProps;
export { MarkerComponent };

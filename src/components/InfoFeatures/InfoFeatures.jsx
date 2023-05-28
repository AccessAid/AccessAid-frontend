import React from 'react';

import {
  BellIcon,
  CurrencyDollarIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';

import './InfoFeatures.css';

const InfoFeatures = () => {
  return (
    <div className='info-features-container'>
      <div className='timeline-container'>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className='p-2'>
                <HomeIcon className='h-4 w-4 text-white' />
              </TimelineIcon>
              <Typography variant='h5' color='white'>
                Find Accessible Places
              </Typography>
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <Typography color='white' className='font-normal text-gray-300'>
                Discover and explore places that offer accessibility for people
                with disabilities. Our application allows you to search and find
                restaurants, stores, parks, and more, ensuring that they are
                accessible for everyone.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className='p-2'>
                <BellIcon className='h-4 w-4 text-white' />
              </TimelineIcon>
              <Typography variant='h5' color='white'>
                Intuitive Search
              </Typography>
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <Typography color='white' className='font-normal text-gray-300'>
                Our application offers you a quick and easy search. Simply enter
                the name of the place or use advanced filters to find exactly
                what you need. Save time and easily find accessible places.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className='p-2'>
                <CurrencyDollarIcon className='h-4 w-4 text-white' />
              </TimelineIcon>
              <Typography variant='h5' color='white'>
                Accessibility Verification
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color='white' className='font-normal text-gray-300'>
                We care about the quality of the information we provide. Our
                community of users constantly verifies and updates the places,
                ensuring that the information about accessibility is accurate.
                Trust us to find accessible places and enjoy inclusive
                experiences.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export { InfoFeatures };

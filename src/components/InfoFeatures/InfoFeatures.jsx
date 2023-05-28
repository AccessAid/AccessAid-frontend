import React from 'react';

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react';
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

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
                Encuentra lugares accesibles
              </Typography>
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <Typography color='white' className='font-normal text-gray-300'>
                Descubre y explora lugares que ofrecen accesibilidad para
                personas con discapacidad. Nuestra aplicación te permite buscar
                y encontrar restaurantes, tiendas, parques y más, asegurándote
                de que sean accesibles para todos.
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
                Búsqueda intuitiva
              </Typography>
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <Typography color='white' className='font-normal text-gray-300'>
                Nuestra aplicación te ofrece una búsqueda rápida y sencilla.
                Simplemente ingresa el nombre del lugar o utiliza filtros
                avanzados para encontrar exactamente lo que necesitas. Ahorra
                tiempo y encuentra lugares accesibles con facilidad.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className='p-2'>
                <CurrencyDollarIcon className='h-4 w-4 text-white' />
              </TimelineIcon>
              <Typography variant='h5' color='white'>
                Verificación de accesibilidad
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color='white' className='font-normal text-gray-300'>
                Nos preocupamos por la calidad de la información que ofrecemos.
                Nuestra comunidad de usuarios verifica y actualiza
                constantemente los lugares, asegurando que la información sobre
                la accesibilidad sea precisa. Confía en nosotros para encontrar
                lugares accesibles y disfrutar de experiencias inclusivas.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export { InfoFeatures };

import React, { useState } from 'react';

import { MapComponent } from '../../components/MapComponent/MapComponent';
import { SearchLocation } from '../../components/SearchLocation/SearchLocation';
import { HelperMap } from '../../components/HelperMap/HelperMap';

import './Map.css';

const Map = () => {
  const [mapObject, setMapObject] = useState(/** @type google.mas.Map */ null);
  return (
    <div className='map-page-container relative'>
      <MapComponent setMapObject={setMapObject} />

      <div className='absolute left-5 top-28 mr-10 rounded-2xl bg-white p-4 md:left-5 md:top-28'>
        <SearchLocation mapObject={mapObject} />
      </div>
      <div className='absolute bottom-10 left-5 mr-10  w-2/4 rounded-2xl bg-white-dark p-4 sm:w-2/6 md:w-2/6 lg:w-1/5 xl:w-1/6'>
        <HelperMap />
      </div>
    </div>
  );
};

export default Map;

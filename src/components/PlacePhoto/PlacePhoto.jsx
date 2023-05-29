import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const PlacePhoto = ({ photoReference, children }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (typeof google !== 'undefined' && photoReference) {
      const baseUrl = 'https://maps.googleapis.com/maps/api/place/photo';
      const maxWidth = `maxwidth=${500}`;
      const photoRef = `photo_reference=${photoReference}`;
      const apiKeyParam = `key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;

      const url = `${baseUrl}?${maxWidth}&${photoRef}&${apiKeyParam}`;

      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImageUrl(url);
      };
    }
  }, [photoReference]);

  return <>{children(imageUrl)}</>;
};

PlacePhoto.propTypes = {
  photoReference: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

PlacePhoto.defaultProps = {
  photoReference: '',
  children: <></>,
};

export { PlacePhoto };

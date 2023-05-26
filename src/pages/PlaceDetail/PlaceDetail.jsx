import React from 'react';

import './PlaceDetail.css';
import { CommentSection } from '../../components/CommentSection/CommentSection';

const PlaceDetail = () => {
  return (
    <div className='place-detail-container'>
      <div className='content-container'>
        <CommentSection />
      </div>
    </div>
  );
};

export default PlaceDetail;

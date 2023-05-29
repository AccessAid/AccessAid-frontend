import React from 'react';

import { CardDev } from './CardDev/CardDev';
import { cardItems } from './utils';

import './GroupCards.css';

const GroupCards = () => {
  return (
    <div className='group-cards-container'>
      <h1 className='group-cards-title'>Our Development Team</h1>

      <p className='group-cards-description'>
        This web app was designed and developed by these developers:
      </p>

      <div className='group-cards-grid'>
        {cardItems?.map(({ name, role, srcLogo, socialMedia }) => (
          <CardDev
            key={name}
            name={name}
            role={role}
            srcLogo={srcLogo}
            socialMedia={socialMedia}
          />
        ))}
      </div>
    </div>
  );
};

export { GroupCards };

import React from 'react';

import './CommentThread.css';
import { Comment } from './Comment/Comment';

const CommentThread = () => {
  return (
    <div className='comment-thread-container'>
      {/* <Comment
        text={'hola como estas'}
        date={'05/05/2023'}
        userName={'pedro'}
      /> */}
      <Comment
        content={
          'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.'
        }
        date={'05/05/2023'}
        userName={'pedro'}
      />
    </div>
  );
};

export { CommentThread };

import React from 'react';

import './CommentSection.css';
import { CommentThread } from './CommentsThread/CommentThread';

const CommentSection = () => {
  return (
    <div className='comment-section-container'>
      <CommentThread />
    </div>
  );
};

export { CommentSection };

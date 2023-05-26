import React from 'react';
import PropTypes from 'prop-types';

import {
  EllipsisHorizontalIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

import './Comment.css';
import { CommentOptions } from './CommentOptions/CommentOptions';
import { Typography } from '@material-tailwind/react';
const Comment = ({ userName, date, content, replyText }) => (
  <article className='b mb-6 rounded-lg border-b-2 border-l-2 border-r-2 border-gray-200 bg-white p-6 text-base shadow-lg'>
    <div className='mb-2 flex items-center justify-between'>
      <div className='flex items-center'>
        <img
          className='h-12 w-12 rounded-full border-2 border-gray-300'
          src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
          alt={userName}
        />
        <Typography className='ml-3 mr-3 inline-flex items-center text-lg font-bold text-gray-600'>
          {userName}
        </Typography>
        <Typography className='text-sm font-normal text-gray-600'>
          {date}
        </Typography>
      </div>

      <CommentOptions />
    </div>
    <Typography className='mt-3 font-normal text-gray-800'>
      {content}
    </Typography>
    <div className='mt-4 flex items-center space-x-4'>
      <button
        type='button'
        className='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400'
      >
        <ChatBubbleLeftEllipsisIcon className='mr-1.5 h-6 w-6' />
        <Typography className='pb-1.5 text-lg'>{replyText}</Typography>
      </button>
    </div>
  </article>
);

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  replyText: PropTypes.string.isRequired,
};

Comment.defaultProps = {
  replyText: 'Reply',
};

export { Comment };

// const Comment = ({ userName, date, text }) => {
//   return (
//     <div className='mx-auto mt-3 w-full flex-col border-b-2 border-r-2 border-gray-200 bg-white py-4 sm:rounded-lg sm:px-4 sm:py-4 sm:shadow-md md:w-2/3 md:px-4'>
//       <div className='md-10 flex flex-row'>
//         <img
//           className='h-12 w-12 rounded-full border-2 border-gray-300'
//           alt={`${userName}'s avatar`}
//           src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80'
//         />
//         <div className='mt-1 flex-col'>
//           <div className='flex flex-1 items-center px-4 font-bold leading-tight'>
//             {userName}
//             <span className='ml-2 text-xs font-normal text-gray-500'>
//               {date}
//             </span>
//           </div>
//           <div className='ml-2 flex-1 px-2 font-medium leading-loose text-gray-600'>
//             {text}
//           </div>
//           <button className='flex-column ml-1 inline-flex items-center px-1 pt-2'>
//             hola2
//           </button>
//           <button className='flex-column -ml-1 inline-flex items-center px-1'>
//             hola
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Comment.propTypes = {
//   userName: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

// Comment.defaultProps = {
//   userName: 'Anonymous',
//   date: 'Unknown',
//   text: '',
// };

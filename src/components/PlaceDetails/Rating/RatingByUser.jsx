import { Button, Typography } from '@material-tailwind/react';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { getTotalRatingByPlace } from '../../../store/actions/placesActions';
import {
  addRating,
  deleteRating,
  getRatingsByPlace,
  updateRating,
} from '../../../store/actions/ratingActions';
import { selectUserData } from '../../../store/slices/authSlice';
import { selectCurrentPlaceDetail } from '../../../store/slices/placesSlice';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const RatingByUser = () => {
  const dispatch = useDispatch();
  const place = useSelector(selectCurrentPlaceDetail);
  const userData = useSelector(selectUserData);

  const defaultRatedByUser = {
    id: -1,
    rating: 0,
  };
  const [disabled, setDisabled] = useState(true);
  const [ratedByUser, setRatedByUser] = useState(defaultRatedByUser);
  const [buttonText, setButtonText] = useState('Give a Rating!');

  const handleRated = async (event, newValue) => {
    console.log('newValue', newValue);
    try {
      if (ratedByUser.id === -1) {
        const addRatingResult = await dispatch(
          addRating({
            rating: newValue,
            user: {
              id: userData.id,
            },
            place: {
              id: place.id,
            },
          }),
        );

        if (addRatingResult?.payload?.id) {
          // HACER POST AL BACKEND PARA CREAR RATING
          setRatedByUser(addRatingResult.payload);
          setDisabled(true);

          toast.success('Rating added', {
            autoClose: 2500,
          });

          return;
        }

        toast.error('There was an error trying to add your rating!', {
          autoClose: 2000,
        });

        return;
      }

      const updateRatingResult = await dispatch(
        updateRating({
          ratingId: ratedByUser.id,
          ratingData: { rating: newValue },
        }),
      );

      if (updateRatingResult?.payload?.id) {
        // HACER UPDATE AL BACKEND PARA CREAR RATING
        setRatedByUser(updateRatingResult.payload);
        setDisabled(true);

        toast.success('Rating updated', {
          autoClose: 2500,
        });

        return;
      }

      toast.error('There was an error trying to update your rating!', {
        autoClose: 2000,
      });
    } catch (error) {}
  };

  const handleButtonClick = () => {
    if (buttonText === 'Give a Rating!' || buttonText === 'Update Rating') {
      setDisabled(false);
      if (ratedByUser.id === -1) {
        setButtonText('Update Rating');
      }
    }
  };

  const handleResetRating = async () => {
    if (ratedByUser.id !== -1) {
      const deleteRatingResult = await dispatch(deleteRating(ratedByUser.id));
      console.log('deleteRatingResult', deleteRatingResult, ratedByUser.id);
      if (deleteRatingResult?.payload?.message.includes('deleted')) {
        setDisabled(true);
        setRatedByUser(defaultRatedByUser);
        setButtonText('Give a Rating!');
        toast.success(deleteRatingResult?.payload?.message, {
          autoClose: 2500,
        });
      }
    }
  };

  // Get rating by user info
  useEffect(() => {
    (async () => {
      try {
        if (place?.id) {
          const result = await dispatch(getRatingsByPlace(place?.id));
          console.log('result!!!!!!!!', result);
          if (result && result?.payload?.content?.length > 0) {
            const getRatingByOneUser = result.payload.content.find(
              (rating) =>
                rating.userId === userData.id && rating.placeId === place.id,
            );

            console.log('getRatingByOneUser', getRatingByOneUser);
            if (getRatingByOneUser) {
              setRatedByUser(getRatingByOneUser);
              setButtonText('Update Rating');
            }
          }
        }
      } catch (error) {
        toast.error(
          "We're suffering problems on load your rating of this place, come back later",
          {
            autoClose: 3500,
          },
        );
      }
    })();
  }, [place]);

  // Get total rating info
  useEffect(() => {
    (async () => {
      try {
        if (place?.id) {
          const newTotalRating = await dispatch(
            getTotalRatingByPlace(place.id),
          );

          if (newTotalRating?.payload === 0) {
            toast.info('Be the first one to add a rating on this site!', {
              autoClose: 3500,
            });
          }
        }
      } catch (error) {
        toast.error(
          "We're suffering problems on load total rating of this place, come back later",
          {
            autoClose: 3500,
          },
        );
      }
    })();
  }, [ratedByUser]);

  return (
    <div className='flex flex-col items-center justify-center md:flex-row lg:justify-around'>
      <div className='flex items-center justify-around'>
        <Button
          className='mt-3 w-full font-medium capitalize'
          variant='gradient'
          color='blue'
          size='small'
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
        <div className='flex items-center justify-end'>
          <StyledRating
            value={ratedByUser?.rating}
            onChange={handleRated}
            disabled={disabled}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.25}
            icon={<FavoriteIcon fontSize='inherit' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
          />
          <Typography color='blue-gray' className='text-s'>
            {ratedByUser?.rating} Rating
          </Typography>

          <Button
            className='mt-3 w-full font-medium capitalize'
            variant='gradient'
            color='blue'
            size='small'
            onClick={handleResetRating}
            startIcon={<DeleteIcon color='primary' />}
          >
            Reset Rating
          </Button>
          {/* <IconButton
            aria-label='delete'
            color='primary'
            onClick={handleResetRating}
            size='large'
          >
            <DeleteIcon />
            <Typography className='text-xs'>Reset Rating</Typography>
          </IconButton> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RatingByUser;

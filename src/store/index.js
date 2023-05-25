import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import placesReducer from './slices/placesSlice';
import mapReducer from './slices/mapSlice';
import profileReducer from './slices/profileSlice';
import commentReducer from './slices/commentSlide';
import ratingReducer from './slices/ratingSlide';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    places: placesReducer,
    map: mapReducer,
    profile: profileReducer,
    comment: commentReducer,
    rating: ratingReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';
import {
  getRatingById,
  updateRating,
  deleteRating,
  getRatings,
  addRating,
  getRatingsByUser,
  getRatingsByPlace,
} from '../actions/ratingActions';

const initialState = {
  ratingsByPlace: [],
  ratingsByUser: [],
  status: 'idle',
  error: null,
};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getRatingsByPlace
      .addCase(getRatingsByPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRatingsByPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ratingsByPlace = action.payload;
        state.error = null;
      })
      .addCase(getRatingsByPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // getRatingsByUser
      .addCase(getRatingsByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRatingsByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ratingsByUser = action.payload;
        state.error = null;
      })
      .addCase(getRatingsByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // add rating
      .addCase(addRating.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(addRating.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // edit rating
      .addCase(updateRating.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateRating.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(updateRating.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // delete ratings
      .addCase(deleteRating.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteRating.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteRating.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const selectRatingsByPlace = (state) => state.rating.ratingsByPlace;
export const selectRatingsByUser = (state) => state.rating.ratingsByUser;

export const selectRatingError = (state) => state.rating.error;

export const {} = ratingSlice.actions;

export default ratingSlice.reducer;

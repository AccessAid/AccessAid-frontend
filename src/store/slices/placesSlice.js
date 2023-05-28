import { createSlice } from '@reduxjs/toolkit';
import {
  addPlace,
  getPlaceByCoordinates,
  deletePlace,
  getUsersByPlace,
  getTotalRatingByPlace,
  getRatingsByPlace,
  getCommentsByPlace,
  getPlacesByUser,
  getPlaceDetailsFromMapSlide,
} from '../actions/placesActions';

const initialState = {
  currentPlaceDetail: null,
  currentId: null,
  totalRatingByPlace: 0,
  ratingsByPlace: [],
  commentsByPlace: [],
  placesByUser: [],
  usersByPLace: [],
  status: 'idle',
  error: null,
};

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get current place details
      .addCase(getPlaceDetailsFromMapSlide.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentPlaceDetail = action.payload;
          state.currentId = action.payload?.id;
        }
      })
      .addCase(getPlaceDetailsFromMapSlide.rejected, (state, action) => {
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // get users by place
      .addCase(getUsersByPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsersByPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.usersByPLace = action.payload;
      })
      .addCase(getUsersByPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // get places by user
      .addCase(getPlacesByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPlacesByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.placesByUser = action.payload;
      })
      .addCase(getPlacesByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // get total rating by place
      .addCase(getTotalRatingByPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTotalRatingByPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalRatingByPlace = action.payload;
      })
      .addCase(getTotalRatingByPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // get ratings by place and user
      .addCase(getRatingsByPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRatingsByPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ratingsByPlace = action.payload;
      })
      .addCase(getRatingsByPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // get comments by place and user
      .addCase(getCommentsByPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCommentsByPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commentsByPlace = action.payload;
      })
      .addCase(getCommentsByPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // add place
      .addCase(addPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentId = action.payload?.id;
        state.currentPlaceDetail = action.payload;
        state.error = null;
      })
      .addCase(addPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const selectCurrentPlaceDetail = (state) =>
  state.places.currentPlaceDetail;
export const selectTotalRatingByPlace = (state) =>
  state.places.totalRatingByPlace;
export const selectRatingsByPlace = (state) => state.places.ratingsByPlace;
export const selectCommentsByPlace = (state) => state.places.commentsByPlace;
export const selectPlacesByUser = (state) => state.places.placesByUser;
export const selectUsersByPLace = (state) => state.places.usersByPLace;
export const selectCurrentIdSelected = (state) => state.places.currentId;
export const selectPlaceError = (state) => state.places.error;

export const { setCurrentId } = placesSlice.actions;

export default placesSlice.reducer;

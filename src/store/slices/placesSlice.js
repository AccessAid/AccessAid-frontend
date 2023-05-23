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
} from '../actions/placesActions';

const initialState = {
  currentPlaceDetail: null,
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
    // Otros reducers relacionados con "Places" si los necesitas
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaceByCoordinates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPlaceByCoordinates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentPlaceDetail = action.payload;
      })
      .addCase(getPlaceByCoordinates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
    // Agregar otros casos extraReducers para los demás actions según tus necesidades
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
export const selectPlaceError = (state) => state.places.error;

export const {
  /* Otros reducers relacionados con el mapa si los necesitas */
  setCurrentSearch,
} = placesSlice.actions;

export default placesSlice.reducer;

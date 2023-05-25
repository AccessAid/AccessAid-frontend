import { createSlice } from '@reduxjs/toolkit';
import {
  getAccessiblePlaceDetails,
  getAccessiblePlaces,
} from '../actions/mapActions';

const initialState = {
  placeSearched: {},
  accessiblePlaces: [],
  placeIdSelected: null,
  currentSearch: {
    address: '',
    placeType: 'restaurant',
    lat: 0,
    lng: 0,
  },
  currentSearchCoordinates: {
    lat: 0,
    lng: 0,
  },
  coordinatesMap: {
    lat: 0,
    lng: 0,
  },
  firstTimeRenderMap: false,
  status: 'idle',
  error: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    // Otros reducers relacionados con "Map" si los necesitas
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload;
      state.currentSearchCoordinates = {
        lat: action.payload?.lat,
        lng: action.payload?.lng,
      };
    },
    setCoordinatesMap: (state, action) => {
      state.coordinatesMap = action.payload;
    },
    setFirstTimeRenderMap: (state, action) => {
      state.firstTimeRenderMap = action.payload;
    },
    setPlaceIdSelected: (state, action) => {
      state.placeIdSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccessiblePlaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccessiblePlaces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload?.currentPlace) {
          state.placeSearched = action.payload?.currentPlace;
        }
        if (action.payload?.nearbyPlaces) {
          state.accessiblePlaces = action.payload?.nearbyPlaces;
        }
      })
      .addCase(getAccessiblePlaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // builders get place details
      .addCase(getAccessiblePlaceDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccessiblePlaceDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.placeIdSelected = action.payload.placeId;
        state.accessiblePlaces = state.accessiblePlaces?.map((place) => {
          if (place?.placeId === action.payload.placeId) {
            return action.payload;
          }

          return place;
        });
      })
      .addCase(getAccessiblePlaceDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.placeIdSelected = null;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
    // Agregar otros casos extraReducers para los demás actions según tus necesidades
  },
});

export const selectPlaceSearched = (state) => state.map.placeSearched;
export const selectAccessiblePlaces = (state) => state.map.accessiblePlaces;
export const selectMapStatus = (state) => state.map.status;
export const selectMapError = (state) => state.map.error;
export const selectCurrentSearch = (state) => state.map.currentSearch;
export const selectCurrentSearchCoordinates = (state) =>
  state.map.currentSearchCoordinates;
export const selectCoordinatesMap = (state) => state.map.coordinatesMap;
export const selectFirstTimeRenderMap = (state) => state.map.firstTimeRenderMap;

export const {
  /* Otros reducers relacionados con el mapa si los necesitas */
  setCurrentSearch,
  setCoordinatesMap,
  setFirstTimeRenderMap,
  setPlaceIdSelected,
} = mapSlice.actions;

export default mapSlice.reducer;

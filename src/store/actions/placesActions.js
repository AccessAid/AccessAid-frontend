import { createAsyncThunk } from '@reduxjs/toolkit';
import { PERSIST_KEY_CURRENT_PLACE } from '../slices/placesSlice';

export const addPlace = createAsyncThunk(
  'places/addPlace',
  async (placeQuery, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/places`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${getState().auth.token}`,
        },
        body: JSON.stringify(placeQuery),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getPlaceByCoordinates = createAsyncThunk(
  'places/getPlaceByCoordinates',
  async (placeCoordinates, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/bycoordinates?latitude=${
          placeCoordinates.lat
        }&longitude=${placeCoordinates.lng}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getPlaceDetailsFromMapSlide = createAsyncThunk(
  'places/getAccessiblePlaceDetails',
  async (_, { rejectWithValue, getState }) => {
    const placeGoogleId = getState().map.placeGoogleId;
    const accessiblePlaces = getState().map.accessiblePlaces;

    if (accessiblePlaces?.length > 0 && placeGoogleId) {
      const findPlaceDetails = accessiblePlaces?.find(
        (place) => place?.placeId === placeGoogleId,
      );

      return findPlaceDetails;
    }

    return rejectWithValue({
      message:
        'There is a problem, come back later when the problem has been solved.',
    });
  },
);

export const persistCurrentPlaceDetails = createAsyncThunk(
  'places/persistCurrentPlaceDetails',
  async (_, { rejectWithValue }) => {
    const storagePlaceDetails = sessionStorage.getItem(
      PERSIST_KEY_CURRENT_PLACE,
    );

    if (storagePlaceDetails) {
      return JSON.parse(storagePlaceDetails);
    }
    return rejectWithValue({
      message:
        'There is a problem with this place, come back later when the problem has been solved.',
    });
  },
);

export const deletePlace = createAsyncThunk(
  'places/deletePlace',
  async (placeId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getUsersByPlace = createAsyncThunk(
  'places/getPlaceUsers',
  async ({ placeId, pageable }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeId}/users?page=${
          pageable.page
        }&size=${pageable.size}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getTotalRatingByPlace = createAsyncThunk(
  'places/getTotalRatingByPlace',
  async (placeId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeId}/totalRating`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        const { totalRating } = data;
        return totalRating;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getRatingsByPlace = createAsyncThunk(
  'places/getRatingsByPlace',
  async ({ placeId, pageable }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeId}/ratings?page=${
          pageable.page
        }&size=${pageable.size}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getCommentsByPlace = createAsyncThunk(
  'places/getCommentsByPlace',
  async ({ placeId, pageable }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeId}/comments?page=${
          pageable.page
        }&size=${pageable.size}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getPlacesByUser = createAsyncThunk(
  'places/getUserPlaces',
  async ({ userId, pageable }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/user/${userId}?page=${
          pageable.page
        }&size=${pageable.size}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

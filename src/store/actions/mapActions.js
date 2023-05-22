import { createAsyncThunk } from '@reduxjs/toolkit';

// {
//   pageable: {
//     page: 1,
//     size: 15,
//   },
// }

export const getAccessiblePlaces = createAsyncThunk(
  'map/getAccessiblePlaces',
  async (_, { rejectWithValue, getState }) => {
    try {
      const currentSearchData = getState().map.currentSearch;

      const URL_REQUEST = currentSearchData.address
        ? `${
            import.meta.env.VITE_API_URL
          }/accessibility/nearbyplaces?latitude=${
            currentSearchData.lat
          }&longitude=${currentSearchData.lng}&address=${
            currentSearchData.address
          }&type=${currentSearchData.placeType}`
        : `${
            import.meta.env.VITE_API_URL
          }/accessibility/nearbyplaces?latitude=${
            currentSearchData.lat
          }&longitude=${currentSearchData.lng}&type=${
            currentSearchData.placeType
          }`;

      const response = await fetch(URL_REQUEST, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${getState().auth.token}`,
        },
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

export const getAccessiblePlaceDetails = createAsyncThunk(
  'map/getAccessiblePlaceDetails',
  async (placeId, { rejectWithValue, getState }) => {
    try {
      const URL_REQUEST = `${
        import.meta.env.VITE_API_URL
      }/places/byApiPlaceId?ApiPlaceId=${placeId}`;

      const response = await fetch(URL_REQUEST, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${getState().auth.token}`,
        },
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

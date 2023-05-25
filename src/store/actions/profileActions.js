import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProfileById = createAsyncThunk(
  'profiles/getProfileById',
  async (profileId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/profiles/${profileId}`,
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

export const updateProfile = createAsyncThunk(
  'profiles/updateProfile',
  async ({ profileId, profileData }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/profiles/${profileId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
          body: JSON.stringify(profileData),
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

export const deleteProfile = createAsyncThunk(
  'profiles/deleteProfile',
  async (profileId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/profiles/${profileId}`,
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

export const getProfiles = createAsyncThunk(
  'profiles/getProfiles',
  async (_, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/profiles`, {
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

export const addProfile = createAsyncThunk(
  'profiles/addProfile',
  async (profileData, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/profiles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${getState().auth.token}`,
        },
        body: JSON.stringify(profileData),
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

export const getProfileByUser = createAsyncThunk(
  'profiles/getProfileByUser',
  async (userId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/profiles/user/${userId}`,
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

      if (data?.message?.includes('not found')) {
        return rejectWithValue({
          message:
            'Your profile is empty, we recommend to add more information',
        });
      }

      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

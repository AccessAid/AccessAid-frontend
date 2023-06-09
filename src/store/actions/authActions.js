import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      if (data?.message.includes('credentials')) {
        return rejectWithValue({
          message: 'the password is incorrect',
        });
      }

      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(payload),
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

export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (payload, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/username/${payload}`,
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

export const refreshTokenAction = createAsyncThunk(
  'auth/refreshTokenAction',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/refreshtoken`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      if (data?.message?.includes('Refresh token was expired')) {
        return rejectWithValue({
          message: 'the session has expired',
        });
      }

      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const updateBasicCredentials = createAsyncThunk(
  'auth/updateBasicCredentials',
  async ({ userId, userBasicData }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
          body: JSON.stringify(userBasicData),
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

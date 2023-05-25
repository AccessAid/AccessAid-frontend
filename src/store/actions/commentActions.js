import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCommentById = createAsyncThunk(
  'comments/getCommentById',
  async (commentId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comments/${commentId}`,
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

export const updateComment = createAsyncThunk(
  'comments/updateComment',
  async ({ commentId, commentData }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comments/${commentId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${getState().auth.token}`,
          },
          body: JSON.stringify(commentData),
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

export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (commentId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comments/${commentId}`,
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

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (_, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
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

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (commentData, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${getState().auth.token}`,
        },
        body: JSON.stringify(commentData),
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

export const getCommentsByUser = createAsyncThunk(
  'comments/getCommentsByUser',
  async (userId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comments/user/${userId}`,
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
  'comments/getCommentsByPlace',
  async ({ placeId, pageable }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comments/place/${placeId}?page=${
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

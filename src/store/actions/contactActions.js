import { createAsyncThunk } from '@reduxjs/toolkit';

export const contactAddAction = createAsyncThunk(
  'contact/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

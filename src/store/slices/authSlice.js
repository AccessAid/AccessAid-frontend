import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/authActions';

const initialState = {
  status: 'idle',
  user: null,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Login
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.token = payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export const selectUserStatus = (state) => state.auth.status;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

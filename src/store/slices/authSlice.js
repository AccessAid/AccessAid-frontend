import { createSlice } from '@reduxjs/toolkit';
import { login, signup, getUserData } from '../actions/authActions';

const initialState = {
  status: 'idle',
  user: null,
  token: null,
  error: null,
};

const PERSIST_KEY_AUTH_TOKEN = 'token-accessaid';
const PERSIST_KEY_USER = 'user-accessaid';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    persistToken: (state, action) => {
      const storageToken = localStorage.getItem(PERSIST_KEY_AUTH_TOKEN);

      state.token = storageToken ? storageToken : null;
    },
    persistUser: (state, action) => {
      const storageUser = localStorage.getItem(PERSIST_KEY_USER);

      state.user = storageUser ? storageUser : null;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.status = 'idle';
      localStorage.removeItem(PERSIST_KEY_AUTH_TOKEN);
      localStorage.removeItem(PERSIST_KEY_USER);
    },
  },
  extraReducers: (builder) => {
    builder

      // Login
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        console.log('payload', payload);
        if (payload?.token) {
          state.token = payload.token;
          localStorage.setItem(PERSIST_KEY_AUTH_TOKEN, payload.token);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.token = null;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // register
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.token = null;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // getUserData
      .addCase(getUserData.pending, (state) => {
        state.status = 'loading';
        state.user = null;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        console.log('payload getUserData', payload);
        if (Object.keys(payload).length === 3) {
          state.user = payload;
          state.error = null;
          localStorage.setItem(PERSIST_KEY_USER, JSON.stringify(payload));
        }
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.user = null;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const selectUserStatus = (state) => state.auth.status;

export const selectToken = (state) => state.auth.token;

export const selectUserData = (state) => state.auth.user;

export const selectError = (state) => state.auth.error;

export const { persistToken, persistUser, logout } = authSlice.actions;

export default authSlice.reducer;

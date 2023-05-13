import { createSlice } from '@reduxjs/toolkit';
import { login, signup, getUserData } from '../actions/authActions';
import { UserEmptyState } from '../../models/users/user';

const initialState = {
  status: 'idle',
  user: UserEmptyState,
  token: null,
  error: null,
};

const PERSIST_KEY_AUTH_TOKEN = 'token-accessaid';
const PERSIST_KEY_USER = 'user-accessaid';

// Redux Toolkit use Immer package to manage state without break immutability
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

      state.user = storageUser ? storageUser : UserEmptyState;
    },
    cleanApiError: (state, action) => {
      state.error = null;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = UserEmptyState;
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
        state.user = UserEmptyState;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        console.log('payload getUserData', payload);
        if (payload?.username.length > 0) {
          state.user = payload;
          state.error = null;
          localStorage.setItem(PERSIST_KEY_USER, JSON.stringify(payload));
        }
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.user = UserEmptyState;
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

export const { persistToken, persistUser, cleanApiError, logout } =
  authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { login, signup, getUserData } from '../actions/authActions';
import { isDatePassed } from '../../commons/utils/dateUtils';

const initialState = {
  status: 'idle',
  user: null,
  token: null,
  refreshTokenDate: null,
  isTokenExpired: true,
  error: null,
};

export const PERSIST_KEY_AUTH_TOKEN = 'token-accessaid';
export const PERSIST_KEY_REFRESH_TOKEN_DATE = 'expiration-date-token-accessaid';
export const PERSIST_KEY_USER = 'user-accessaid';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    persistToken: (state, action) => {
      const storageRefreshTokenDate = localStorage.getItem(
        PERSIST_KEY_REFRESH_TOKEN_DATE,
      );
      const storageToken = localStorage.getItem(PERSIST_KEY_AUTH_TOKEN);

      if (storageRefreshTokenDate && storageToken) {
        const isExpired = isDatePassed(storageRefreshTokenDate);

        state.isTokenExpired = isExpired;

        if (isExpired) {
          console.log('PERSIST TOKEN, isExpired TRUE');
          localStorage.removeItem(PERSIST_KEY_AUTH_TOKEN);
          localStorage.removeItem(PERSIST_KEY_REFRESH_TOKEN_DATE);
          localStorage.removeItem(PERSIST_KEY_USER);
          return;
        }

        state.refreshTokenDate = storageRefreshTokenDate;
        state.token = storageToken;
      }
    },
    persistUser: (state, action) => {
      const storageUser = localStorage.getItem(PERSIST_KEY_USER);

      state.user = storageUser ? JSON.parse(storageUser) : null;
    },
    setIsTokenExpired: (state, action) => {
      state.isTokenExpired = action.payload;
    },
    cleanApiError: (state, action) => {
      state.error = null;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.refreshTokenDate = null;
      state.isTokenExpired = true;
      state.status = 'idle';
      localStorage.removeItem(PERSIST_KEY_AUTH_TOKEN);
      localStorage.removeItem(PERSIST_KEY_REFRESH_TOKEN_DATE);
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
        if (payload?.expiration) {
          state.refreshTokenDate = payload.expiration;
          localStorage.setItem(
            PERSIST_KEY_REFRESH_TOKEN_DATE,
            payload.expiration,
          );
          state.isTokenExpired = false;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.token = null;
        state.refreshTokenDate = null;
        state.isTokenExpired = true;
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
        state.status = 'succeeded';
        console.log('payload getUserData', payload);
        if (payload?.username) {
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

export const selectRefreshTokenDate = (state) => state.auth.refreshTokenDate;

export const selectIsTokenExpired = (state) => state.auth.isTokenExpired;

export const selectUserData = (state) => state.auth.user;

export const selectError = (state) => state.auth.error;

export const {
  persistToken,
  persistUser,
  cleanApiError,
  logout,
  setIsTokenExpired,
} = authSlice.actions;

export default authSlice.reducer;

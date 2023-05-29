import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  signup,
  getUserData,
  refreshTokenAction,
  updateBasicCredentials,
} from '../actions/authActions';
import { isDatePassed } from '../../commons/utils/dateUtils';

const initialState = {
  status: 'idle',
  user: null,
  token: null,
  refreshToken: null,
  tokenExpiredDate: null,
  isTokenExpired: true,
  error: null,
};

export const PERSIST_KEY_AUTH_TOKEN = 'token-accessaid';
export const PERSIST_KEY_AUTH_REFRESH_TOKEN = 'refresh-token-accessaid';
export const PERSIST_KEY_TOKEN_EXPIRED_DATE = 'expiration-date-token-accessaid';
export const PERSIST_KEY_USER = 'user-accessaid';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    persistToken: (state, action) => {
      const storageTokenExpiredDate = localStorage.getItem(
        PERSIST_KEY_TOKEN_EXPIRED_DATE,
      );
      const storageToken = localStorage.getItem(PERSIST_KEY_AUTH_TOKEN);
      const storageRefreshToken = localStorage.getItem(
        PERSIST_KEY_AUTH_REFRESH_TOKEN,
      );

      if (storageTokenExpiredDate && storageToken && storageRefreshToken) {
        const isExpired = isDatePassed(storageTokenExpiredDate);

        state.isTokenExpired = isExpired;

        if (isExpired) {
          console.log('PERSIST TOKEN, isExpired TRUE');
          localStorage.removeItem(PERSIST_KEY_AUTH_TOKEN);
          localStorage.removeItem(PERSIST_KEY_TOKEN_EXPIRED_DATE);
          localStorage.removeItem(PERSIST_KEY_USER);
          localStorage.removeItem(PERSIST_KEY_AUTH_REFRESH_TOKEN);
          return;
        }

        state.tokenExpiredDate = storageTokenExpiredDate;
        state.token = storageToken;
        state.refreshToken = storageRefreshToken;
      }
    },
    persistUser: (state, action) => {
      const storageUser = localStorage.getItem(PERSIST_KEY_USER);

      state.user = storageUser ? JSON.parse(storageUser) : null;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
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
      state.tokenExpiredDate = null;
      state.isTokenExpired = true;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem(PERSIST_KEY_AUTH_TOKEN);
      localStorage.removeItem(PERSIST_KEY_TOKEN_EXPIRED_DATE);
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
          state.tokenExpiredDate = payload.expiration;
          localStorage.setItem(
            PERSIST_KEY_TOKEN_EXPIRED_DATE,
            payload.expiration,
          );
          state.isTokenExpired = false;
        }

        if (payload?.refreshToken) {
          state.refreshToken = payload.refreshToken;
          localStorage.setItem(
            PERSIST_KEY_AUTH_REFRESH_TOKEN,
            payload.refreshToken,
          );
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.token = null;
        state.refreshToken = null;
        state.tokenExpiredDate = null;
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
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // refreshToken
      .addCase(refreshTokenAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(refreshTokenAction.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        console.log('payload', payload);
        if (payload?.token) {
          state.token = payload.token;
          localStorage.setItem(PERSIST_KEY_AUTH_TOKEN, payload.token);
        }
        if (payload?.expiration) {
          state.tokenExpiredDate = payload.expiration;
          localStorage.setItem(
            PERSIST_KEY_TOKEN_EXPIRED_DATE,
            payload.expiration,
          );
          state.isTokenExpired = false;
        }

        if (payload?.refreshToken) {
          state.refreshToken = payload.refreshToken;
          localStorage.setItem(
            PERSIST_KEY_AUTH_REFRESH_TOKEN,
            payload.refreshToken,
          );
        }
      })
      .addCase(refreshTokenAction.rejected, (state, action) => {
        console.log('action refreshTokenAction.rejected', action);
        state.status = 'failed';
        state.token = null;
        state.refreshToken = null;
        state.tokenExpiredDate = null;
        state.isTokenExpired = true;
        if (!action.payload) {
          state.error = action.error.message;
          return;
        }

        if (action.payload.refreshToken) {
          state.error = action.payload.refreshToken;
          return;
        }

        state.error = action.payload.message;
      })
      // update basic credentials
      .addCase(updateBasicCredentials.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBasicCredentials.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        if (payload?.username) {
          state.user = payload;
          state.error = null;
          localStorage.setItem(PERSIST_KEY_USER, JSON.stringify(payload));
        }
      })
      .addCase(updateBasicCredentials.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const selectUserStatus = (state) => state.auth.status;

export const selectToken = (state) => state.auth.token;

export const selectRefreshToken = (state) => state.auth.refreshToken;

export const selectTokenExpiredDate = (state) => state.auth.tokenExpiredDate;

export const selectIsTokenExpired = (state) => state.auth.isTokenExpired;

export const selectUserData = (state) => state.auth.user;

export const selectAuthError = (state) => state.auth.error;

export const {
  persistToken,
  persistUser,
  setUserData,
  cleanApiError,
  logout,
  setIsTokenExpired,
} = authSlice.actions;

export default authSlice.reducer;

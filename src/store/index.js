import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './slices/authSlice';
import placesReducer from './slices/placesSlice';
import mapReducer from './slices/mapSlice';
import { refreshJwt } from './middlewares/checkExpirationToken';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    places: placesReducer,
    map: mapReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().prepend(refreshJwt).concat(thunk),
});

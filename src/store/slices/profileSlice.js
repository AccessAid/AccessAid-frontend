import { createSlice } from '@reduxjs/toolkit';
import {
  getProfileByUser,
  addProfile,
  updateProfile,
  deleteProfile,
} from '../actions/profileActions';

const initialState = {
  // userId: null,
  currentUserProfile: null,
  profileExist: false,
  status: 'idle',
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileExist: (state, action) => {
      state.profileExist = action.payload;
    },
    cleanProfileError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getProfileByUser
      .addCase(getProfileByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfileByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUserProfile = action.payload;
        state.error = null;
      })
      .addCase(getProfileByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // addProfile
      .addCase(addProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUserProfile = action.payload;
        state.profileExist = true;
        state.error = null;
        // state.userId = action.payload?.id;
      })
      .addCase(addProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.profileExist = false;

        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // edit profile
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUserProfile = action.payload;
        state.profileExist = true;
        state.error = null;
        // state.userId = action.payload?.id;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // delete profile
      .addCase(deleteProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUserProfile = null;
        state.profileExist = false;
        state.error = null;
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
    // Agregar otros casos extraReducers para los demás actions según tus necesidades
  },
});

export const selectCurrentUserProfile = (state) =>
  state.profile.currentUserProfile;

export const selectProfileExist = (state) => state.profile.profileExist;
export const selectProfileError = (state) => state.profile.error;

export const { setProfileExist, cleanProfileError } = profileSlice.actions;

export default profileSlice.reducer;

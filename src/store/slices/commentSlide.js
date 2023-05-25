import { createSlice } from '@reduxjs/toolkit';
import {
  getCommentById,
  updateComment,
  deleteComment,
  getComments,
  addComment,
  getCommentsByUser,
  getCommentsByPlace,
} from '../actions/commentActions';

const initialState = {
  commentsByPlace: [],
  commentsByUser: [],
  status: 'idle',
  error: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getCommentsByPlace
      .addCase(getCommentsByPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCommentsByPlace.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commentsByPlace = action.payload;
        state.error = null;
      })
      .addCase(getCommentsByPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // getCommentsByUser
      .addCase(getCommentsByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCommentsByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commentsByUser = action.payload;
        state.error = null;
      })
      .addCase(getCommentsByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // add comment
      .addCase(addComment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // edit comment
      .addCase(updateComment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      // delete comments
      .addCase(deleteComment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
    // Agregar otros casos extraReducers para los demás actions según tus necesidades
  },
});

export const selectCommentsByPlace = (state) => state.comment.commentsByPlace;
export const selectCommentsByUser = (state) => state.comment.commentsByUser;

export const selectCommentError = (state) => state.comment.error;

export const {} = commentSlice.actions;

export default commentSlice.reducer;

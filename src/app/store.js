import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsSlice from '../features/posts/postsSlice';
import postSlice from '../features/post/postSlice';
import filterSlice from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    post: postSlice,
    filter: filterSlice
  },
});

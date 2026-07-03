import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './bookscategories';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;

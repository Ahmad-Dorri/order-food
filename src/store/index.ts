import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './UI/modalSlice';
import mealReducer from './meals/mealsSlice';
import RootState from './types';
const store = configureStore({
  reducer: {
    modal: modalReducer,
    meal: mealReducer,
  },
});
export default store;

import { createSlice } from '@reduxjs/toolkit';
import RootState from '../types';
const initialState: RootState['meal'] = {
  items: [],
  totalAmount: 0,
};
const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    //     removeItem(state, action) {},
  },
});
export const mealsActions = mealSlice.actions;
export default mealSlice.reducer;

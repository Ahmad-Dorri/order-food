import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import RootState from '../types';
import itemInterface from '../../models';
const initialState: RootState['meal'] = {
  items: [],
  totalAmount: 0,
};
const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<itemInterface>) {
      const existingItemIndex: number = state.items.findIndex(
        (item: itemInterface) => item.id === action.payload.id
      );
      if (existingItemIndex === -1) {
        state.items.push(action.payload);
        action.payload.amount = 1;
      }
      if (
        existingItemIndex >= 0 &&
        state.items[existingItemIndex] &&
        state.items[existingItemIndex].amount !== undefined
      ) {
        state.items[existingItemIndex].amount++;
      }
      state.totalAmount = state.items.reduce((accumulator, item) => {
        return accumulator + item.amount * item.price;
      }, 0);
      state.totalAmount = Number(state.totalAmount.toFixed(2));
    },
    //     removeItem(state, action) {},
  },
});
export const mealsActions = mealSlice.actions;
export default mealSlice.reducer;

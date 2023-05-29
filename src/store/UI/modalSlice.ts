import { createSlice } from '@reduxjs/toolkit';
import RootState from '../types';
const initialState: RootState['modal'] = {
  isModalHidden: false,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalHidden = !state.isModalHidden;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;

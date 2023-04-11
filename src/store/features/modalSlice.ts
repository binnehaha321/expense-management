import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  open: boolean,
}

const initialState: ModalState = {
  open: false
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    }
  }
})

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
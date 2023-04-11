import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ExpenseState {
  json_data: string,
}

const initialState: ExpenseState = {
  json_data: ""
}

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<string>) => {
      state.json_data = action.payload;
    },
    remove: (state) => {
      state.json_data = "";
    },
  }
})

export const { submit, remove } = expenseSlice.actions;
export default expenseSlice.reducer;
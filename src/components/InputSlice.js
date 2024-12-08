import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
  name: "input",
  initialState: {
    buyInput: [],
  },
  reducers: {
    addInput(state, action) {
      state.buyInput = [...state.buyInput, action.payload];
    },
  },
});

export const { addInput } = InputSlice.actions;
export default InputSlice.reducer;

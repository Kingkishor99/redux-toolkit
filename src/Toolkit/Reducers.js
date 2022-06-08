import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    substract: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { add, substract, reset } = counterSlice.actions;

export default counterSlice.reducer;

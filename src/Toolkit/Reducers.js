import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
  aa: "kkkkk",
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
    text: (state, action) => {
      state.aa = action.payload;
    },
  },
});

export const { add, substract, reset, text } = counterSlice.actions;

export default counterSlice.reducer;

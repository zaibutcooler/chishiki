import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementAmount } = counterSlice.actions;

export default counterSlice.reducer;

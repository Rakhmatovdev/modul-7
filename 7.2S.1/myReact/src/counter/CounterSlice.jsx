import { createSlice } from "@reduxjs/toolkit";

export  const  CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state,action) => {
      state.count += action.payload
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {increment,decrement,reset}=CounterSlice.actions

export default CounterSlice.reducer
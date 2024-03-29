import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter/CounterSlice";
const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
export default store;

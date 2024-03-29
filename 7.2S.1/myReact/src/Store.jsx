import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter/CounterSlice";
import TodoSlice from "./todo/TodoSlice";
const store = configureStore({
  reducer: {
    counter: CounterSlice,
    todo:TodoSlice,
  },
});
export default store;

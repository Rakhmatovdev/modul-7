import { configureStore } from "@reduxjs/toolkit";
import HisonSlice from "./HisonSlice";

export const store=configureStore({
reducer:{
  todo:HisonSlice
}
})
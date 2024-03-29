import { configureStore } from "@reduxjs/toolkit";
import  TodoSlice from "./todoSlice"
const store=configureStore({
reducer:{
    todo:TodoSlice,
}
})
export default store;
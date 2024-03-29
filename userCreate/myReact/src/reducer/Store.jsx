import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const Store=configureStore({
reducer:{
    todo:Reducer
}
})
export default Store
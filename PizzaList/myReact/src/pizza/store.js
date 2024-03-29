import {configureStore} from "@reduxjs/toolkit"
import PizzaSlice from "./PizzaSlice"
 const store=configureStore({
reducer:{
pizza:PizzaSlice
}
 })
 export default store
import { createSlice } from "@reduxjs/toolkit";
export const PizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    list: [],
  },
  reducers: {
    addPizza: (state, action) => {
    state.list=[...state.list,action.payload]
    },
    deletePizza:(state,action)=>{
    state.list=state.list.filter((piza)=>piza.id !==action.payload.id)
    }
  },
});

export const {addPizza,deletePizza}=PizzaSlice.actions
export default PizzaSlice.reducer
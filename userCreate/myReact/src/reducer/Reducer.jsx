import { createSlice } from "@reduxjs/toolkit";

const Reducer =createSlice({
 name:"todo",
 initialState:{
    list:[]
 },
 reducers:{
  addTodo:(state,action)=>{
 state.list=[...state.list,action.payload]
  },
deleteTodo:(state,action)=>{
    state.list=state.list.filter((user)=>user.id !==action.payload.id)
},
updateTodo:(state,action)=>{
    state.list=state.list.map((user)=>user.telefon ===action.payload.telefon?{...user,...action.payload,id:user.id}:user)
}  
 }  
})

export default Reducer.reducer
export const {addTodo,deleteTodo,updateTodo}=Reducer.actions
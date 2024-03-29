import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice=createSlice({
    name:"todo",
    initialState:{
    list:[],
    },
reducers:{
    addTodo:(state,action)=>{
state.list=[...state.list,{name:action.payload,id:Date.now()}]
    },
    deleteTodo:(state,action)=>{
state.list=state.list.filter(prev=>prev.id !==action.payload.id)
    },
    updateTodo:(state,action)=>{
        state.list=state.list.map((user)=>user.id === action.payload.id?{...user,name:action.payload.name}:user)
    },
}
})

export const {addTodo,deleteTodo,updateTodo} =TodoSlice.actions
export default TodoSlice.reducer;

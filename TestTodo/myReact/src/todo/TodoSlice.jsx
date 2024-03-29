import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    list1: [],
    list2: [],
    list3: [],
    status: "loading",
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    addTodo: (state, action) => {
      if (state.status == "open") {
        state.list1 = [...state.list1, action.payload];
      } 
      if (state.status == "inprogres") {
       state.list2 = [...state.list2, action.payload];
     }
      if (state.status == "complite") {
        state.list3 = [...state.list3, action.payload];
      }
    },
    deleteTodo:(state,action)=>{
state.list1=state.list1.filter((user)=>user.id !== action.payload.id)
state.list2=state.list2.filter((user)=>user.id !== action.payload.id)
state.list3=state.list3.filter((user)=>user.id !== action.payload.id)
    },
    updateTodo:(state,action)=>{
  state.list1=state.list1.map((user)=>user.id===action.payload.id?{...user,name:action.payload.name}:user)    
  state.list2=state.list2.map((user)=>user.id===action.payload.id?{...user,name:action.payload.name}:user)  
  state.list3=state.list3.map((user)=>user.id===action.payload.id?{...user,name:action.payload.name}:user)  
    }
  },
});
export default TodoSlice.reducer;
export const { addTodo, setStatus,deleteTodo,updateTodo } = TodoSlice.actions;

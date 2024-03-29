import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  update:{}
};

const hisobSlise = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createKassa: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    updateKassa: (state, action) => {
    state.list=state.list.map((user)=>user.id ===action.payload.id?action.payload:user)
    },
    removeKassa: (state, action) => {
      state.list = state.list.filter((user)=>user.id !==action.payload)
    },
    updated:(state,action)=>{
      state.update =  action.payload;
    },
    
  },
});

export const {  createKassa,updateKassa,removeKassa,updated} = hisobSlise.actions;
export default hisobSlise.reducer;

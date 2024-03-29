import { createSlice } from "@reduxjs/toolkit";

const initialState={
shot:0,
valyuta:"USD",
qarzMaqsadi:"",
qarz:0
}


const accountSlice = createSlice({
    name:"acount",
    initialState,
reducers:{
   shotToldirish:(state,action)=>{
    state.shot+=action.payload
   },
   shotSarfla:(state,action)=>{
    state.shot-=action.payload
   },
   qarzOlish:(state,action)=>{
   state.qarz=action.payload.qarz
   state.qarzMaqsadi=action.payload.qarzmaqsad
   state.shot+=state.qarz
   },
   qarzYopish:(state)=>{
    state.shot-=state.qarz
    state.qarz=0
   }
}
});

export const {shotToldirish,shotSarfla,qarzOlish,qarzYopish} =accountSlice.actions
export default accountSlice.reducer
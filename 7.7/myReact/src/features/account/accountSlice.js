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

export const {shotSarfla,qarzOlish,qarzYopish} =accountSlice.actions
export default accountSlice.reducer

export function shotToldirish(amount,currency){
    return async function (dispatch){
        if(!currency==="USD"){
            const resp=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
            const data=await resp.json()
            dispatch({type:"acount/shotToldirish",payload:data.rates.USD})
        }else { dispatch({type:"acount/shotToldirish",payload:amount})
    }
}}
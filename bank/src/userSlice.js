import { createSlice } from "@reduxjs/toolkit"

const initialState={
fullName:"",
nationalId:"",
createAt:"",
balance:null,
payBack:[],
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    createUser:(state,action)=>{
        state.fullName=action.payload.fullName;
        state.nationalId=action.payload.nationalId;
        state.createAt=action.payload.createAt;
    },
    addBalance:(state,action)=>{
     state.balance+=action.payload
    },
    withBalance:(state,action)=>{
        state.balance-=action.payload
    },
    payLoan:(state,action)=>{
        state.payBack=[...state.payBack,action.payload]
    },
    withPayLoan:(state,action)=>{
        state.payBack=state.payBack.filter((user)=>user.id !== action.payload)
    }
    }
})
export default userSlice.reducer
export const {createUser,addBalance,withBalance,payLoan,withPayLoan} =userSlice.actions
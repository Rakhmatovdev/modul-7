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
    }
})
export default userSlice.reducer
export const {createUser} =userSlice.actions
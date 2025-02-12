import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type UserInitiaState = {
  uid:string
}

const initialState:UserInitiaState = {
  uid:''
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    setUserUID:(state:UserInitiaState,action:PayloadAction<string>)=>{
      state.uid = action.payload
    }
  }
})

export const {setUserUID} = userSlice.actions

export default userSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type SettingInitiaState = {
  version:string
}

const initialState:SettingInitiaState = {
  version:'0.0.1'
}

export const settingSlice = createSlice({
  name:'setting',
  initialState,
  reducers:{
    setVersion:(state:SettingInitiaState,action:PayloadAction<string>)=>{
      state.version = action.payload
    }
  }
})

export const {setVersion} = settingSlice.actions

export default settingSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { GetUser } from './TodoRequest'
interface IImage{
    id:number,
    imageName:string
}
export interface IData{
    id:number,
    name:string,
    images: IImage[],
    description:string,
    isCompleted:boolean
}
export interface CounterState {
  data: IData[]
}

const initialState: CounterState = {
  data: [],
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUser.pending, () => {
        console.log("Loading..."); 
    })
    builder.addCase(GetUser.fulfilled, (state, action) => {
       state.data = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer
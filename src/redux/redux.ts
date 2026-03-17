import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const url = "https://696e0194d7bacd2dd7155df5.mockapi.io/users"

interface IUser{
    name: string,
    avatar: string,
    age: string,
    status: string,
    location: string,
    isLoading: boolean,
    id: string
}

export interface CounterState {
  data: IUser[]
}

const initialState: CounterState = {
  data:[],
  isLoading: false
}

export const GetUser = createAsyncThunk("counter/GetUser", async()=> {
    try {
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        console.error(error);
    }
})
export const AddNewUser = createAsyncThunk("counter/AddNewUser", async(newUser, {dispatch})=> {
    try {
         await axios.post(url, newUser)
         dispatch(GetUser())
    } catch (error) {
        console.error(error);
    }
})
export const DeleteUser = createAsyncThunk("counter/DeleteUser", async(id:string, {dispatch})=> {
    try {
         await axios.get(`${url}/${id}`)
        dispatch(GetUser())
    } catch (error) {
        console.error(error);
    }
})
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUser.pending, (state, action) => {
        console.log("PENDING");
        state.isLoading = true
    }),
    builder.addCase(GetUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
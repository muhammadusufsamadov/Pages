import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const url = "https://696e0194d7bacd2dd7155df5.mockapi.io/users"
export interface IData {
    id: string ,
    name: string,
    age: string,
    status: boolean,
    location: string,
    avatar: string
}

export interface CounterState {
    data: IData[]
}

const initialState: CounterState = {
    data: [],
}

export const getData = createAsyncThunk<IData[],string | undefined>("counter/getData", async (value) => {
    try {
    if(value == "active")
        {
            const {data} = await axios.get(`${url}?status=true`)
            return data
        }
        else if(value == "inactive")
            {
                const {data} = await axios.get(`${url}?status=false`)
                return data
            }
       else if(value)
            {
                const {data} = await axios.get(`${url}?name=${value}`)
                return data
            }
        else{
            const { data } = await axios.get(url)
            return data
        }
    } catch (error) {
        console.error(error);
    }
})

export const deleteData = createAsyncThunk<void, string>("counter/deleteData",async(id,{dispatch}) =>
    {
        try {
            await axios.delete(`${url}/${id}`)
           dispatch(getData())
        } catch (error) {
            console.error(error);
            
        }
    })
export const addData = createAsyncThunk<void,IData>("counter/addData",async(newData,{dispatch}) =>
    {
        try {
            await axios.post(url,newData)
            dispatch(getData())
        } catch (error) {
            console.error(error);
            
        }
    })
export const editData = createAsyncThunk<void,IData>("counter/editData",async(obj,{dispatch}) =>
    {
        try {
            await axios.put(`${url}/${obj.id}`,obj)
            dispatch(getData())
        } catch (error) {
            console.error(error);
            
        }
    })

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers:(builder) =>
        {
            builder.addCase(getData.pending,(state,action) =>
                {
                    console.log("PENDING");
                    
                })
                
            builder.addCase(getData.fulfilled,(state,action) =>
                {
                    console.log("FULLFILED");
                    state.data = action.payload
                })
        },
        
})

export const { } = counterSlice.actions

export default counterSlice.reducer
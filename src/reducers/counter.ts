import { createSlice } from '@reduxjs/toolkit'
export interface IData {
    id: number,
    name:string,
    age:number,
    status:boolean
}

export interface CounterState {
    data: IData[]
}

let initialState: CounterState = {
    data: [
        {
            id:1, name:"Muhammad", age:12, status: false,
        },
        {
            id:2, name:"Muhammad2", age:14, status:true
        },
        {
            id:3, name:"Ali", age:21, status:true
        },
        {
            id:4, name:"Ahmad", age:29, status:false
        },
        {
            id:5, name:"Vali", age:16, status:true
        }
    ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   deleteUser:(state, {payload}) => {
    state.data = state.data.filter((user) => user.id !== payload)
   },
   changeStatus: (state, {payload}) => {
    state.data = state.data.map((user) => user.id == payload ? {...user, status: !user.status } : user)
   },
   addNewUser: (state,{payload}) => {
     state.data.push(payload)
   },
   editUser: (state,{payload}) => {
    state.data = state.data.map((user) => 
        user.id == payload.id ? payload : user
    )
   }
}
})


// Action creators are generated for each case reducer function
export const {deleteUser, changeStatus, addNewUser, editUser} = counterSlice.actions

export default counterSlice.reducer
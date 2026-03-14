import { create } from "zustand";

export const toDolist = create((set, get) => ({
  data: [
    { id:1, name:"Muhammad", age:13, status:false, location:"Dushanbe"},
    { id:2, name:"Ali", age:20, status:true, location:"Ayni"},
    { id:3, name:"Ahmad", age:24, status:true, location:"Fayzobod"}
  ],

  deleteUser: (id:number) =>
    set((state)=>({
      data: state.data.filter(user => user.id !== id)
    })),

  addUser: (user:any) =>
    set((state)=>({
      data: [...state.data, { id: Date.now(), ...user }]
    })),

  editUser: (obj:any) =>
    set((state)=>({
      data: state.data.map(user =>
        user.id === obj.id ? obj : user
      )
    }))
}));
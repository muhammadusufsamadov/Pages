import { data } from "react-router";
import { create } from "zustand";

export const useTodo = create((set, get) => ({
     data:[
        {
            id:1,
            name:"Iso",
            status:false
        },
        {
            id:2,
            name:"Valid",
            status:true
        },
    ],
    count:1,
    setCount: () => set((state: any) => ({count: state.count + 1})),
    setCount2: () => set((state: any) => ({count: state.count - 1})),
    setCount3: () => set((state: any) => ({count: state.count * 2})),
    setCount4: () => set((state: any) => ({count: state.count / 2})),
    setCount5: () => set((state: any) => ({count: state.count = 0})),
  
    deleteUser:(id) => {
        set((state) => ({data: state.data.filter((user) => user.id !== id)}))
    },
   addNewUser:(name:string) => {
    set((state) => ({
        data: [...state.data, {id: Date.now(), name}]
    }))
}}))
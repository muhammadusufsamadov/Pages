import { data } from "react-router";
import { create } from "zustand";

export const useTodo = create((set, get) => ({
     data:[
        {
            id:1,
            name:"Iso",
            age:12,
            email:"isojovin@gmail.com",
            status:false
        },
        {
            id:2,
            name:"Valid",
            age:15,
            email:"freisojovin@gmail.com",
            status:true
        },
        {
            id:3,
            name:"Umar",
            age:13,
            email:"Umarisojovin@gmail.com",
            status:false
        },
    ],
   
    deleteUser:(id) => {
        set((state) => ({data: state.data.filter((user) => user.id !== id)}))
    },
   addNewUser:(name:string, age:number, email:string, status:boolean, id:number) => {
    set((state) => ({
        data: [...state.data, { name, age, email, status}]
    }))},
   editUser: (obj:any) => {
    set((state) => ({
      data: state.data.map((e) => (e.id === obj.id ? obj : e))
    }))
}}))
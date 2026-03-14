import { create } from "zustand";

export let toDolist = create((set, get) => ({
    data: [
        {
            id: 1,
            name:"Muhammad",
            age:13,
            status:false,
            location:"Dushanbe"
        },
        {
            id: 2,
            name:"Ali",
            age:20,
            status:true,
            location:"Ayni"
        },
        {
            id: 3,
            name:"Ahmad",
            age:24,
            status:true,
            location:"Fayzobod"
        }
    ]
}))
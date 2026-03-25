import axios from "axios"
import {create} from "zustand"
import type { IUser } from "../App"
const url = "http://37.27.29.18:8001/api/to-dos"
interface ITodos{
    todos: IUser[],
    getUsers: () => Promise<void>,
    deleteUser: (id: number) => Promise<void>,
    addNewUser: (newUser: IUser) => Promise<void>,
    searchName: (name:IUser) => Promise<void>
}
export let todoList = create<ITodos>((set, get) => ({
    todos:[] as IUser[],
    getUsers: async() => {
try {
    let {data} = await axios.get(url)
    set({todos: data.data})
} catch (error) {
    console.error(error);
}
    },
    deleteUser: async(id: number) => {
        try {
            await axios.delete(`${url}?id=${id}`)
            get().getUsers()
        } catch (error) {
            console.error(error);
        }
    },
    addNewUser: async(newUser: IUser) => {
        try {
            await axios.post(url, newUser)
            get().getUsers()
        } catch (error) {
            console.error(error);
        }
    },
    searchName: async(name:IUser) => {
        let {data} = await axios.get(`${url}?search=${name}`)
        set({todos: data.data})
    }
}))
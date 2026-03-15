import { create } from 'zustand';
const api = "https://696e0194d7bacd2dd7155df5.mockapi.io/users"
import axios from "axios"
interface IUser {
  id: number,
  name:string,
  avatar:string,
  age:string,
  status:boolean,
  Location: string,
}
export let todoStore = create((set, get) => ({
  data: [],

  getData: async () => {
    try {
      let { data } = await axios.get(api)
      set({ data: data })
    } catch (error) {
      console.error(error)
    }
  },
  deleteUser: async (id: IUser) => {
  try {
    await axios.delete(`${api}/${id}`)
    get().getData()
  } catch (error) {
    console.error(error);
  }
  },
  addUser: async (obj: IUser) => {
  try {
    await axios.post(api, obj)
    get().getData()
  } catch (error) {
    console.error(error);
  }
  }
}))
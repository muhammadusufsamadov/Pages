import axios  from 'axios';
import { create } from 'zustand';
const api = "https://696e0194d7bacd2dd7155df5.mockapi.io/users"

interface IUser {
  id: number,
  name:string,
  avatar:string,
  age:string,
  status:boolean,
  Location:string
}
export let toDoStore = create((set, get) => ({
  data: [],
  getUsers: async() => {
    try {
      let {data} = await axios.get(api)
      set({data: data})
    } catch (error) {
      console.error(error);
    }
  },
  deleteUser: async(id:IUser) => {
    try {
      await axios.delete(`${api}/${id}`),
       (get() as any).getUsers()
    } catch (error) {
      console.error(error);
    }
  },
  addNewUser: async(newUser:IUser) => {
    try {
      await axios.post(api, newUser),
        (get() as any).getUsers()
    } catch (error) {
      console.error(error);
    }
  },
  editUser: async(obj:IUser) => {
    try {
      await axios.put(`${api}/${obj.id}`, obj),
        (get() as any).getUsers()
    } catch (error) {
      console.error(error);
    }
  },
  changeStatus: async(id:number, user:IUser) => {
    try {
      await axios.put(`${api}/${id}`, {
        ...user,
        status: !user.status
      }),
      (get() as any).getUsers()
    } catch (error) {
      console.error(error);
    }
  },

}))
import { create } from "zustand";
type IUser = {
  id: number;
  name: string;
};
type Store = {
  data: IUser[];
  addNewUser: (newUser: IUser) => void;
};
let url = "https://696e0194d7bacd2dd7155df5.mockapi.io/users";
import axios from "axios";
export const toDolist = create((set, get) => ({
  data: [],
  getUser: async () => {
    try {
      let { data } = await axios.get(url);
      set({ data: data });
    } catch (error) {
        console.error(error);
    }
  },
//   addNewUser: (newUser: IUser) => {
//     set((state: IUser) => ({ data: [...state.data, newUser] }));
//   },
}));
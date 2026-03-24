import axios from "axios";
import { create } from "zustand";

const url = "https://696e0194d7bacd2dd7155df5.mockapi.io/users";

type User = {
  id: number;
  name: string;
  status: boolean;
  avatar?: string;
};

type Store = {
  data: User[];
  getUsers: () => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  editUser: (user: User) => Promise<void>;
  addUser: (user: Omit<User, "id">) => Promise<void>;
};

export const todoList = create<Store>((set) => ({
  data: [],

  getUsers: async () => {
    const res = await axios.get(url);
    set({ data: res.data });
  },

  deleteUser: async (id) => {
    await axios.delete(`${url}/${id}`);
    set((state) => ({
      data: state.data.filter((u) => u.id !== id),
    }));
  },

  editUser: async (user) => {
    await axios.put(`${url}/${user.id}`, user);
    set((state) => ({
      data: state.data.map((u) => (u.id === user.id ? user : u)),
    }));
  },

  addUser: async (user) => {
    const res = await axios.post(url, user);
    set((state) => ({
      data: [...state.data, res.data],
    }));
  },
}));
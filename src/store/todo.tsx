import axios from "axios";
import { create } from "zustand";
import type { IUser } from "../App";

const url = "http://37.27.29.18:8001/api/to-dos";

interface ITodos {
  todos: IUser[];
  getUsers: () => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  addNewUser: (newUser: any) => Promise<void>;
  searchName: (name: string) => Promise<void>;
  editUser: (id: number, updateUser: any) => Promise<void>;
}

export const todoList = create<ITodos>((set, get) => ({
  todos: [],

  getUsers: async () => {
    try {
      const { data } = await axios.get(url);
      set({ todos: data.data });
    } catch (error) {
      console.error(error);
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`${url}?id=${id}`);
      get().getUsers();
    } catch (error) {
      console.error(error);
    }
  },

  addNewUser: async (newUser) => {
    try {
      await axios.post(url, newUser);
      get().getUsers();
    } catch (error) {
      console.error(error);
    }
  },

  searchName: async (name) => {
    try {
      const { data } = await axios.get(`${url}?search=${name}`);
      set({ todos: data.data });
    } catch (error) {
      console.error(error);
    }
  },

  editUser: async (id, updateUser) => {
    try {
      await axios.put(`${url}?id=${id}`, updateUser);
      get().getUsers();
    } catch (error) {
      console.error(error);
    }
  },
}));
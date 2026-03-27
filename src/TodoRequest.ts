import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://37.27.29.18:8001/api/to-dos";
export const urlImage = "http://37.27.29.18:8001/images";
const urlIsCompletely = "http://37.27.29.18:8001/completed"
export let GetUser: any = createAsyncThunk("counter/GetUser", async () => {
  try {
    let { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
export let InfoUser: any = createAsyncThunk("counter/InfoUser", async (id:number) => {
  try {
    let { data } = await axios.get(`${url}/${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
export let AddUser: any = createAsyncThunk(
  "counter/AddUser",
  async (newUser: any, { dispatch }) => {
    try {
      await axios.post(url, newUser);
      dispatch(GetUser());
    } catch (error) {
      console.error(error);
    }
  },
);
export let DeleteUser: any = createAsyncThunk(
  "counter/DeleteUser",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${url}?id=${id}`);
      dispatch(GetUser());
    } catch (error) {
      console.error(error);
    }
  },
);
export let DeleteImage: any = createAsyncThunk(
  "counter/DeleteImage",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${url}/images/${id}`);
      dispatch(GetUser());
    } catch (error) {
      console.error(error);
    }
  },
);

export let AddImage: any = createAsyncThunk(
  "counter/AddImage",
  async ({ id, formData }:any, { dispatch }) => {
    try {
      await axios.post(`${url}/${id}/images`, formData)
      dispatch(GetUser())
    } catch (error) {
      console.error(error);
    }
  },
);

export let EditUser: any = createAsyncThunk("counter/EditUser", async(NewUser:any, {dispatch}) => {
  try {
    await axios.put(`${url}?id=${NewUser.id}`, NewUser)
    dispatch(GetUser())
  } catch (error) {
    console.error(error);
  }
} )
export let changeStatus: any = createAsyncThunk("counter/changeStatus", async({id}:any, {dispatch}) => {
  try {
    await axios.put(`${urlIsCompletely}?id=${id}`)
    dispatch(GetUser())
  } catch (error) {
    console.error(error);
  }
})


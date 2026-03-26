import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IData } from "./todo";

const url = "http://37.27.29.18:8001/api/to-dos";
const urlIsCompletely = "http://37.27.29.18:8001/completed"
export let GetUser = createAsyncThunk("counter/GetUser", async () => {
  try {
    let { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
export let AddUser = createAsyncThunk(
  "counter/AddUser",
  async (newUser: IData, { dispatch }) => {
    try {
      await axios.post(url, newUser);
      dispatch(GetUser());
    } catch (error) {
      console.error(error);
    }
  },
);
export let DeleteUser = createAsyncThunk(
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
export let DeleteImage = createAsyncThunk(
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

export let AddImage = createAsyncThunk(
  "counter/AddImage",
  async ({ id, image }, { dispatch }) => {
    try {
      await axios.post(`${url}/${id}/images`, image)
      dispatch(GetUser())
    } catch (error) {
      console.error(error);
    }
  },
);

export let EditUser = createAsyncThunk("counter/EditUser", async({id,NewUser}, {dispatch}) => {

  try {
    await axios.put(`${url}?id=${id}`, NewUser)
    dispatch(GetUser())
  } catch (error) {
    console.error(error);
  }
} )
export let changeStatus = createAsyncThunk("counter/changeStatus", async({id}, {dispatch}) => {
  try {
    await axios.put(`${urlIsCompletely}?id=${id}`)
    dispatch(GetUser())
  } catch (error) {
    console.error(error);
  }
} )
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodoService } from "../../api/services";
const fetchTodos = createAsyncThunk("todo/fetch", async () => {
  const res = await fetchTodoService();

  return res.data;
});

const initialState = { todoData: [] };
const todoSlice = createSlice({
  name: "todo/redux",
  initialState,
  extraReducers: {},
});

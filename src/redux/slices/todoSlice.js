import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchTodoService } from "../../api/services";

export const fetchTodos = createAsyncThunk("todo/fetch", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return await res.data;
});

const initialState = { todoData: [], status: "idle" };
const todoSlice = createSlice({
  name: "todo/redux",
  initialState,
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "pending";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.todoData = action.payload;
    },
    [fetchTodos.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export default todoSlice.reducer;

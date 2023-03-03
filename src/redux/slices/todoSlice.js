import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchTodoService } from "../../api/services/getAllTodo";

export const fetchTodos = createAsyncThunk("todo/fetch", async () => {
  const res = await fetchTodoService();

  return await res.data;
});

const initialState = { todoData: [], status: "idle" };
const todoSlice = createSlice({
  name: "todo/redux",
  initialState,
  reducers: {
    DELETETODO: (state, action) => {
      state.todoData = state.todoData.filter(
        (item) => item.id !== action.payload
      );
    },
    EDITTODO: (state, action) => {
      const FindeIndex = state.todoData.findIndex(
        (item) => item.id === action.payload
      );
      state.todoData.splice(FindeIndex, 1, action.payload);
    },
  },
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
export const { DELETETODO, EDITTODO } = todoSlice.actions;

export default todoSlice.reducer;

import { instance } from "../constants";
export const editTodoService = (id) =>
  instance.put(`/todos/edit?id=${id}`, data);

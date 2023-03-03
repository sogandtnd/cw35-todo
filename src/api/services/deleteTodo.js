import { instance } from "../constants";
export const deleteTodoService = (id) => instance.delete(`/todos/${id}`);

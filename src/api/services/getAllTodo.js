import { instance } from "../constants";
export const fetchTodoService = () => instance.get("/todos");

import { instance } from "../constants";
export const fetchTodoService = () => {
  return instance.get("/todos");
};

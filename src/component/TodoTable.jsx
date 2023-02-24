import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slices/todoSlice";
import TodoTr from "./TodoTr";
const TodoTable = () => {
  const dispatch = useDispatch();
  const { todoData } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todoData.map((item) => (
          <TodoTr item={item} />
        ))}
      </tbody>
    </table>
  );
};
export default TodoTable;

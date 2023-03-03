import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { DELETETODO } from "../redux/slices/todoSlice";

const TodoTr = ({ item }) => {
  const dispatch = useDispatch();
  const DeleteTodo = (id) => {
    dispatch(DELETETODO(id));
  };
  const EditTodo = () => {
    dispatch();
  };
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.completed}</td>
      <td>
        <div className="d-flex flex-row gap-2">
          <AiFillDelete onClick={() => DeleteTodo(item.id)} />

          <BsFillEyeSlashFill />
          <Link to="/EditTodo">
            <AiFillEdit />
          </Link>
        </div>
      </td>
    </tr>
  );
};
export default TodoTr;

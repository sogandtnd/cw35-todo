import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";

const TodoTr = ({ item }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.completed}</td>
      <td>
        <div className="d-flex flex-row gap-2">
          <AiFillDelete />
          <BsFillEyeSlashFill />
          <AiFillEdit />
        </div>
      </td>
    </tr>
  );
};
export default TodoTr;

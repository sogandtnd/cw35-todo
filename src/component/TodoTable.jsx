import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
const TodoTable = () => {
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
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>
            <div className="d-flex flex-row gap-2">
              <AiFillDelete />
              <BsFillEyeSlashFill />
              <AiFillEdit />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default TodoTable;

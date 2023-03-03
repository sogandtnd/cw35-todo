import { Button } from "../component/Button";
export const EditTodo = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="todo">Todo</option>
          <option value="donig">Doing</option>
          <option value="done">Done</option>
        </select>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <Button className="btn-primary">Save</Button>
          <Button className="btn-outline-primary">Cancle</Button>
        </div>
      </form>
    </div>
  );
};

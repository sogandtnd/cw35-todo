import { Route, Routes } from "react-router-dom";
import { EditTodo } from "../pages/editTodo";
import { Home } from "../pages/home";

export const ProjectRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/EditTodo" element={<EditTodo />} />
    </Routes>
  );
};

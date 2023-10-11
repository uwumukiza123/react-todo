import React from "react";
import { FaPlus } from "react-icons/fa";
import TodoComponent from "../components/Todo";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState({ name: "", done: false });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const alltodos = [...todos, todo];
    setTodos(alltodos);
    setTodo({ name: "", done: false });
  };

  const handleDone = (id) => {
    const ourTodos = todos;
    const todo = ourTodos.find((_, index) => index === id);
    todo.done = !todo.done;
    setTodos([...ourTodos]);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos([...newTodos]);
  };

  return (
    <div className="main">
      <div>
        <h1 className="title">todos</h1>
      </div>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Add todo ..."
          name="name"
          onChange={handleChange}
          value={todo.name}
        />
        <button type="submit">
          <FaPlus color="#fff" />
        </button>
      </form>
      {todos.map((item, index) => (
        <TodoComponent
          key={index}
          item={item}
          handleDone={() => handleDone(index)}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default Todo;

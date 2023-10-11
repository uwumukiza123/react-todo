import React from "react";
import { FaTrash } from "react-icons/fa";

const TodoComponent = (props) => {
  const { item, handleDone, handleDelete } = props;

  return (
    <div className="todo">
      <div>
        <input type="checkbox" checked={item.done} onChange={handleDone} />
        <p className={item.done ? "line-through" : ""}>{item.name}</p>
      </div>
      <div className="delete" onClick={handleDelete}>
        <FaTrash color="#F42704" />
      </div>
    </div>
  );
};

export default TodoComponent;

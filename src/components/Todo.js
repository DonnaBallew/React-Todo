import React from "react";
import "../components/Todo.css";

const Todo = (props) => {
  return (
    <div
      className={`task${props.task.completed ? "Completed" : ""}`}
      onClick={() => props.toggleCompleted(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;

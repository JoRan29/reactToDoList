import React from "react";
import "./App.css";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "lightgray",
    textDecoration: "line-through",
  };
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;

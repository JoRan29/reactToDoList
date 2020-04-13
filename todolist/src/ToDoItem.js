import React from "react";
import "./App.css";

export default function ToDoItem(props) {
  return (
    <div className="todoItem">
      <input
        onChange={() => props.handleChange(props.id)}
        type="checkbox"
        checked={props.completed}
      />
      <span>Text: {props.text}</span>
    </div>
  );
}

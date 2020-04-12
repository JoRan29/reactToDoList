import React from "react";
import "./App.css";

export default function ToDoItem(props) {
  return (
    <div className="todoItem">
      <input type="checkbox" checked={props.completed} />
      <span>Text: {props.text}</span>
    </div>
  );
}

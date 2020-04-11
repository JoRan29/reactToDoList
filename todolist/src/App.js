import React from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  return (
    <div className="todoList">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;

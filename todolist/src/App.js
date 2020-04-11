import React from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import Joke from "./Joke";

function App() {
  return (
    <div className="todoList">
      <ToDoItem />
      <ToDoItem />
      <Joke question="Is this a joke?" punchline="Yes!" />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;

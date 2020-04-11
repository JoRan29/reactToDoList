import React from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData.map((j) => {
    return <Joke key={j.id} question={j.question} punchline={j.punchline} />;
  });
  return (
    <div className="todoList">
      <ToDoItem />
      <ToDoItem />
      {jokeComponents}
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;

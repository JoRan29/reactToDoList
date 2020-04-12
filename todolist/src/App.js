import React from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import Joke from "./Joke";
import jokesData from "./jokesData";
import Product from "./Product";
import productsData from "./productsData";

function App() {
  const jokeComponents = jokesData.map((j) => {
    return <Joke key={j.id} question={j.question} punchline={j.punchline} />;
  });
  const productsComponents = productsData.map((p) => {
    return <Product key={p.id} type={p.type} price={p.price} />;
  });
  return (
    <div className="todoList">
      <ToDoItem />
      <ToDoItem />
      {jokeComponents}
      {productsComponents}
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;

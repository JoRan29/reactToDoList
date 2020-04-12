import React from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import Joke from "./Joke";
import jokesData from "./jokesData";
import Product from "./Product";
import productsData from "./productsData";
import todoData from "./todoData";

// function App() {
//   const jokeComponents = jokesData.map((j) => {
//     return <Joke key={j.id} question={j.question} punchline={j.punchline} />;
//   });
//   const productsComponents = productsData.map((p) => {
//     return <Product key={p.id} type={p.type} price={p.price} />;
//   });
//   const todoComponent = todoData.map((t) => {
//     return <ToDoItem key={t.id} text={t.text} completed={t.completed} />;
//   });
//   return (
//     <div className="todoList">
//       {todoComponent}
//       {jokeComponents}
//       {productsComponents}
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }
  render() {
    const jokeComponents = jokesData.map((j) => {
      return <Joke key={j.id} question={j.question} punchline={j.punchline} />;
    });
    const productsComponents = productsData.map((p) => {
      return <Product key={p.id} type={p.type} price={p.price} />;
    });
    const todoComponent = this.state.todos.map((t) => {
      return <ToDoItem key={t.id} text={t.text} completed={t.completed} />;
    });
    return (
      <div className="todoList">
        {todoComponent}
        {jokeComponents}
        {productsComponents}
      </div>
    );
  }
}

export default App;

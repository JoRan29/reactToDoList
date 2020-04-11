import React from "react";

export default function Joke(props) {
  return (
    <div>
      <p>Question: {props.question}</p>
      <h3>Answer: {props.punchline}</h3>
    </div>
  );
}

import React from "react";

export default function Producs(props) {
  return (
    <div className="products">
      <p>Type: {props.type}</p>
      <h3>Price: {props.price}</h3>
    </div>
  );
}

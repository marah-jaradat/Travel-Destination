import "./tour.css";
import React from "react";

export default function tour(props) {
  return (
    <div>
      <p id="name">{props.name}</p>
      <img src={props.image} alt={props.name} />
      <hr></hr>
    </div>
  );
}

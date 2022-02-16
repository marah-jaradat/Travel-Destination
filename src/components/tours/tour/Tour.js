import "./tour.css";
import React from "react";

const Tour = ({ tour }) => {
  return (
    <div>
      <h2 id="name">{tour.name}</h2>
      <img src={tour.image} alt="tour" />
    </div>
  );
};
export default Tour;

// export default function tour(props) {
//   return (
//     <div>
//       <p id="name">{props.name}</p>
//       <img src={props.image} alt={props.name} />
//       <hr></hr>
//     </div>
//   );
// }

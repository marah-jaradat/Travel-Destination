import "./Tours.css";

import Tour from "./tour/Tour";
import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/db.json";

export default function Tours(tour) {
  console.log(tour);
  return (
    <>
      {tour.data.map((object) => {
        console.log(object);
        return (
          <div key={object.id}>
            <Link to={`/tour/${object.id}`}>
              <Tour key={object.id} />
            </Link>
          </div>
        );
      })}
    </>
  );
}

// const Tours = ({ tour }) => {
//   console.log(tour);
//   return (
//     <div>
//       {tour.map((tour) => (
//         <div key={tour.id}>
//           <Link to={`/tour/${tour.id}`}>
//             <Tour tour={tour} />
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Tours;

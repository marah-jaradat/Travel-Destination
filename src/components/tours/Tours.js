import "./Tours.css";

import Tour from "./tour/Tour";
import React from "react";
import { Link } from "react-router-dom";

export default function Tours(tourss) {
  console.log(tourss);
  return (
    <>
      {tourss.data.map((object) => {
        console.log(object);
        return (
          <div>
            <Link to={`/tour/${object.id}`}>
              <Tour tour={object} />
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

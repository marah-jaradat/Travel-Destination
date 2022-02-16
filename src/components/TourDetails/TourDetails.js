import "./TourDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

// export default function TourDetails(props) {

const TourDetails = (props) => {
  let { id } = useParams();
  console.log(333, id);

  function getTourData() {
    let lol = props.data;
    const dataOfTour = lol.filter((data) => data.id === id);
    return dataOfTour;
  }
  const dataOfTour = getTourData();
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <h2>{dataOfTour[0].name}</h2>

      <p>
        {showMore
          ? dataOfTour[0].info
          : `${dataOfTour[0].info.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "show less" : "show more"}
        </button>
      </p>
      <img src={dataOfTour[0].image} />
      <div>Price: {dataOfTour[0].price}</div>
    </div>
  );
};
export default TourDetails;

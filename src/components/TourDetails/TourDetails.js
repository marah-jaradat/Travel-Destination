import "./TourDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  let { id } = { useParams };

  const getTourData = () => {
    let lol = props.data.db;
    const filterDaa = lol.filter((data) => data.id === id);
    return filterDaa;
  };
  const filterDaa = getTourData();
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <p>
        {showMore
          ? filterDaa[0].info
          : `${filterDaa[0].info.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "show less" : "show more"}
        </button>
      </p>
      <div>Price: {filterDaa[0].price}</div>
      <Header />
      <Footer />
    </div>
  );
}
// export default TourDetails

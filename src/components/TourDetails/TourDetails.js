import "./TourDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  const [showMore, setShowMore] = useState(false);
  function clickhandle() {
    setShowMore(!showMore);
  }
  return (
    <>
      <button onClick={() => setShowMore(!showMore)}></button>
      <Header />
      <Footer />
    </>
  );
}

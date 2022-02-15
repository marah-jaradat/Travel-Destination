import "./TourDetails.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  const [showMore, setShowMore] = useState(false);
  function clickhandle() {
    setShowMore(!showMore);
  }

  // console.log(props.data);
  return (

    <button onClick={()=> setShowMore(!showMore)}>
      /button>}
    <>
      <Header />
      <Footer />
    </>
  );
}

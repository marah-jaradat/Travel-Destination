import "./TourDetails.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  const [showMore, setinfo] = useState(false);
  function clickhandle() {
    setinfo(!showMore);
  }

  // console.log(props.data);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

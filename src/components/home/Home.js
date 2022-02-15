import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

import data from "../../data/db.json";

export default function Home() {
  return (
    <>
      <Header />
      <Tours data={data.data} />
      <Footer />
    </>
  );
}

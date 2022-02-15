import "./Home.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
// const travel = require("./data/db.json");
import data from "./data/db.json";

export default function Home(props) {
  return (
    <>
      <Header />
      <Tours travel={data.data} />
      <Footer />
    </>
  );
}

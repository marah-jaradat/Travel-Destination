import Header from "./components/Header";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
// const travel = require("./data/db.json");

export default function Home(props) {
  return (
    <>
      <Header />
      <Tours data={props.travel} />
      <Footer />
    </>
  );
}

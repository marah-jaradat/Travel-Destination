import Header from "./Header";
import Footer from "./Footer";
import Tours from "./Tours";
// const travel = require("./data/db.json");

export default function Home(props) {
  return (
    <>
      <Header />
      <Tours data={props.db} />
      <Footer />
    </>
  );
}

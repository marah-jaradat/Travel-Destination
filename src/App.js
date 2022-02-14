import Home from "./components/Home";
const travel = require("./data/db.json");
export default function App() {
  return (
    <>
      <Home db={travel} />
    </>
  );
}

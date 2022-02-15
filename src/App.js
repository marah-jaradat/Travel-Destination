import Home from "./components/Home";
import travel from "./data/db.json";
export default function App() {
  return (
    <>
      <Home db={travel} />
    </>
  );
}

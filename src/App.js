import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import TourDetails from "./components/TourDetails/TourDetails";
import Navbar from "./components/Navbar/Navbar";
const travel = require("./data/db.json");

export default function App() {
  return (
    <>
      <Navbar />
      <Home db={travel} />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home data={travel} />} />
        <Route path="/city/:id" element={<TourDetails data={travel} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

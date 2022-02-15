import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TourDetails from "./components/TourDetails";
import Tours from "./components/tours/Tours";
import Navbar from "./components/Navbar/Navbar";
const travel = require("./data/db.json");

export default function App() {
  return (
    <>
      <Navbar />
      <Home db={travel} />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TourDetails" element={<TourDetails />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

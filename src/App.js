import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import Navbar from "./components/Navbar/Navbar";
import travel from "./data/db.json";

export default function App() {
  console.log(travel);
  return (
    <>
      <Navbar />
      {/* <Home db={travel} /> */}
      <Routes>
        <Route path="/" element={<Home data={travel} />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
// data={travel}

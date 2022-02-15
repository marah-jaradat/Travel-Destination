import "./Navbar.css";
import { Link } from "react-router-dom";
export default function navBar() {
  return (
    <>
      <nav>
        <Link id="headnav" to="/">
          Home
        </Link>
      </nav>
      {/* <nav>
        <Link to="/TourDetails">About</Link>
      </nav>
      <nav>
        <Link to="/Tours">About</Link>
      </nav> */}
    </>
  );
}

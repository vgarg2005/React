import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MoodSense</h2>
      </div>

      <div className="navbar-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          className={location.pathname === "/analyze" ? "active" : ""}
          to="/analyze"
        >
          Analyze
        </Link>
        <Link
          className={location.pathname === "/history" ? "active" : ""}
          to="/history"
        >
          History
        </Link>
        <Link
          className={location.pathname === "/trends" ? "active" : ""}
          to="/trends"
        >
          Trends
        </Link>
        <Link
          className={location.pathname === "/about" ? "active" : ""}
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
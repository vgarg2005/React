import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Mental Health Risk Detector</h1>
        <p>
          An interactive React-based awareness website that analyzes journal
          entries, identifies emotional patterns, and provides supportive
          suggestions.
        </p>

        <div className="home-buttons">
          <Link to="/analyze">
            <button>Start Mood Check</button>
          </Link>
          <Link to="/about">
            <button className="secondary-btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
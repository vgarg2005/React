import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About This Project</h1>

        <p>
          This project is a React-based mental health awareness website.
          It accepts journal text as input and performs simple keyword-based
          emotional analysis.
        </p>

        <p>
          The system identifies sentiment, emotion, and a risk score, then
          shows supportive suggestions. It also stores previous records using
          local storage for history and trend viewing.
        </p>

        <p>
          This is an educational and awareness tool only. It should not be
          used as a clinical diagnosis system.
        </p>

        <div className="about-features">
          <h3>Main Features</h3>
          <ul>
            <li>Journal entry analysis</li>
            <li>Risk score detection</li>
            <li>Emotion summary</li>
            <li>History tracking</li>
            <li>Trend dashboard</li>
            <li>Routing with React Router</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
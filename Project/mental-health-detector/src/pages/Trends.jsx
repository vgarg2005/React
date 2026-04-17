import "./Trends.css";

function Trends() {
  const history = JSON.parse(localStorage.getItem("moodHistory")) || [];

  const totalEntries = history.length;
  const positiveCount = history.filter(
    (item) => item.sentiment === "Positive"
  ).length;
  const negativeCount = history.filter(
    (item) => item.sentiment === "Negative"
  ).length;
  const neutralCount = history.filter(
    (item) => item.sentiment === "Neutral"
  ).length;

  const averageRisk =
    totalEntries > 0
      ? (
          history.reduce((sum, item) => sum + item.riskScore, 0) / totalEntries
        ).toFixed(2)
      : 0;

  return (
    <div className="trends-page">
      <h1>Trends Dashboard</h1>
      <p className="trends-subtext">
        Basic summary of your emotional activity based on saved entries.
      </p>

      <div className="trend-cards">
        <div className="trend-card">
          <h3>Total Entries</h3>
          <p>{totalEntries}</p>
        </div>

        <div className="trend-card">
          <h3>Positive Entries</h3>
          <p>{positiveCount}</p>
        </div>

        <div className="trend-card">
          <h3>Negative Entries</h3>
          <p>{negativeCount}</p>
        </div>

        <div className="trend-card">
          <h3>Neutral Entries</h3>
          <p>{neutralCount}</p>
        </div>

        <div className="trend-card wide-card">
          <h3>Average Risk Score</h3>
          <p>{averageRisk}/100</p>
        </div>
      </div>
    </div>
  );
}

export default Trends;
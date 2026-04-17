import "./ResultCard.css";

function ResultCard({ result }) {
  const getRiskClass = (score) => {
    if (score >= 70) return "high-risk";
    if (score >= 40) return "medium-risk";
    return "low-risk";
  };

  return (
    <div className="result-card">
      <h2>Analysis Result</h2>

      <div className="result-item">
        <span>Sentiment</span>
        <strong>{result.sentiment}</strong>
      </div>

      <div className="result-item">
        <span>Emotion</span>
        <strong>{result.emotion}</strong>
      </div>

      <div className="result-item">
        <span>Risk Score</span>
        <strong>{result.riskScore}/100</strong>
        <div className="risk-bar">
          <div
            className={`risk-fill ${getRiskClass(result.riskScore)}`}
            style={{ width: `${result.riskScore}%` }}
          ></div>
        </div>
      </div>

      <div className="result-item">
        <span>Suggestion</span>
        <p>{result.suggestion}</p>
      </div>

      <div className="result-item">
        <span>Date</span>
        <p>{result.date}</p>
      </div>
    </div>
  );
}

export default ResultCard;
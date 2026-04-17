import "./HistoryList.css";

function HistoryList({ history, onDelete }) {
  return (
    <div className="history-section">
      <h2>Previous Entries</h2>

      {history.length === 0 ? (
        <div className="empty-history">No journal entries found.</div>
      ) : (
        history.map((item) => (
          <div className="history-card" key={item.id}>
            <div className="history-top">
              <h3>{item.emotion}</h3>
              {onDelete && (
                <button
                  className="delete-btn"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              )}
            </div>

            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Text:</strong> {item.text}</p>
            <p><strong>Sentiment:</strong> {item.sentiment}</p>
            <p><strong>Risk Score:</strong> {item.riskScore}/100</p>
          </div>
        ))
      )}
    </div>
  );
}

export default HistoryList;
import "./JournalForm.css";

function JournalForm({ entry, setEntry, handleAnalyze, handleClear }) {
  return (
    <div className="journal-card">
      <h2>Write how you are feeling today</h2>
      <p className="journal-subtext">
        Type your thoughts below and click analyze.
      </p>

      <textarea
        rows="12"
        placeholder="Example: I feel tired, lonely, and stressed these days..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <div className="journal-info">
        <span>Characters: {entry.length}</span>
        <span>Words: {entry.trim() ? entry.trim().split(/\s+/).length : 0}</span>
      </div>

      <div className="journal-buttons">
        <button className="analyze-btn" onClick={handleAnalyze}>
          Analyze
        </button>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default JournalForm;
import { useEffect, useState } from "react";
import HistoryList from "../Components/HistoryList";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moodHistory")) || [];
    setHistory(saved);
  }, []);

  const handleDelete = (id) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));
  };

  const handleClearAll = () => {
    const confirmDelete = window.confirm("Do you want to clear all history?");
    if (confirmDelete) {
      setHistory([]);
      localStorage.removeItem("moodHistory");
    }
  };

  return (
    <div className="history-page">
      <div className="history-header">
        <div>
          <h1>History</h1>
          <p>View previously analyzed journal entries.</p>
        </div>

        {history.length > 0 && (
          <button className="clear-history-btn" onClick={handleClearAll}>
            Clear All
          </button>
        )}
      </div>

      <HistoryList history={history} onDelete={handleDelete} />
    </div>
  );
}

export default History;
import { useState } from "react";
import JournalForm from "../Components/JournalForm";
import ResultCard from "../Components/ResultCard";
import Disclaimer from "../Components/Disclaimer";
import { analyzeText } from "../utils/analyzer";
import "./Analyze.css";

function Analyze() {
  const [entry, setEntry] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!entry.trim()) {
      alert("Please write something in the journal box.");
      return;
    }

    const analysis = analyzeText(entry);

    const newRecord = {
      id: Date.now(),
      text: entry,
      date: new Date().toLocaleString(),
      ...analysis,
    };

    setResult(newRecord);

    const oldHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    localStorage.setItem("moodHistory", JSON.stringify([newRecord, ...oldHistory]));
  };

  const handleClear = () => {
    setEntry("");
    setResult(null);
  };

  return (
    <div className="analyze-page">
      <h1>Analyze Journal Entry</h1>
      <p className="analyze-text">
        Write your feelings and get an awareness-based emotional summary.
      </p>

      <div className="analyze-grid">
        <JournalForm
          entry={entry}
          setEntry={setEntry}
          handleAnalyze={handleAnalyze}
          handleClear={handleClear}
        />
        {result && <ResultCard result={result} />}
      </div>

      <Disclaimer />
    </div>
  );
}

export default Analyze;
export function analyzeText(text) {
  const lowerText = text.toLowerCase();

  const negativeWords = [
    "sad",
    "depressed",
    "lonely",
    "tired",
    "hopeless",
    "worthless",
    "cry",
    "stress",
    "stressed",
    "anxious",
    "upset",
    "angry",
    "fear",
    "empty",
    "pain",
    "bad",
  ];

  const positiveWords = [
    "happy",
    "good",
    "great",
    "excited",
    "calm",
    "relaxed",
    "fine",
    "joy",
    "better",
    "peaceful",
    "motivated",
    "hopeful",
    "awesome",
    "nice",
  ];

  let negativeCount = 0;
  let positiveCount = 0;

  negativeWords.forEach((word) => {
    if (lowerText.includes(word)) {
      negativeCount++;
    }
  });

  positiveWords.forEach((word) => {
    if (lowerText.includes(word)) {
      positiveCount++;
    }
  });

  let sentiment = "Neutral";
  let emotion = "Stable";
  let riskScore = 20;
  let suggestion = "Maintain a healthy routine and continue journaling.";

  if (negativeCount > positiveCount) {
    sentiment = "Negative";
    riskScore = Math.min(negativeCount * 15 + 25, 100);

    if (lowerText.includes("angry")) {
      emotion = "Anger";
      suggestion =
        "Try breathing exercises, step away for a moment, and avoid instant reactions.";
    } else if (
      lowerText.includes("stress") ||
      lowerText.includes("stressed") ||
      lowerText.includes("anxious")
    ) {
      emotion = "Stress";
      suggestion =
        "Take proper rest, try meditation, and reduce overload where possible.";
    } else {
      emotion = "Sadness";
      suggestion =
        "Talk to someone you trust, avoid isolation, and seek support if these feelings continue.";
    }
  } else if (positiveCount > negativeCount) {
    sentiment = "Positive";
    emotion = "Joy";
    riskScore = 10;
    suggestion =
      "Keep following habits that support your wellbeing and positivity.";
  }

  return { sentiment, emotion, riskScore, suggestion };
}
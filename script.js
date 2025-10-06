let debugMode = false;

function toggleDebug() {
  debugMode = !debugMode;
  alert("Debug mode " + (debugMode ? "enabled" : "disabled"));
}

function analyze() {
  const text = document.getElementById("inputText").value;
  const { label, score, reasons } = analyzeText(text);

  document.getElementById("result").innerText = label;
  document.getElementById("details").innerHTML = `
    <strong>Score:</strong> ${score}<br>
    <strong>Reasons:</strong><br>
    <ul>${reasons.map(r => `<li>${r}</li>`).join("")}</ul>
  `;

  if (debugMode) {
    console.log("Score:", score);
    console.log("Reasons:", reasons);
  }
}

function analyzeText(text) {
  let score = 0;
  let reasons = [];

  const upperCount = (text.match(/[A-Z]/g) || []).length;
  const exclamations = (text.match(/!/g) || []).length;

  const absoluteWords = ["always", "never", "everyone", "no one", "all", "none"];
  const clickbaitWords = ["shocking", "you won’t believe", "secret", "hidden", "what happened next"];
  const vagueSources = ["experts say", "some people claim", "they say", "studies show", "researchers believe"];

  const conspiracyKeywords = ["microchip", "bill gates", "5g", "plandemic", "deep state"];

  const textLower = text.toLowerCase();

  // Excessive capitalization
  if (upperCount > 30) {
    score += 3;
    reasons.push("Excessive use of uppercase letters.");
  }

  // Too many exclamation marks
  if (exclamations > 3) {
    score += 2;
    reasons.push("Overuse of exclamation marks.");
  }

  // Absolute terms
  absoluteWords.forEach(word => {
    if (textLower.includes(word)) {
      score += 1;
      reasons.push(`Use of absolute term: "${word}"`);
    }
  });

  // Clickbait language
  clickbaitWords.forEach(word => {
    if (textLower.includes(word)) {
      score += 3;
      reasons.push(`Possible sensational language: "${word}"`);
    }
  });

  // Vague sources
  vagueSources.forEach(phrase => {
    if (textLower.includes(phrase)) {
      score += 2;
      reasons.push(`Vague source detected: "${phrase}"`);
    }
  });

  // Conspiracy-related terms
  conspiracyKeywords.forEach(keyword => {
    if (textLower.includes(keyword)) {
      score += 4;
      reasons.push(`Reference to known conspiracy theory: "${keyword}"`);
    }
  });

  // Final label based on score
  let label;
  if (score >= 8) {
    label = "❌ Potentially Misleading";
  } else if (score >= 4) {
    label = "⚠️ Needs Caution";
  } else {
    label = "✅ Likely Trustworthy";
  }

  return { label, score, reasons };
}

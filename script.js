let debugMode = false;

function toggleDebug() {
  debugMode = !debugMode;
  alert("Debug mode " + (debugMode ? "enabled" : "disabled"));
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("details").innerHTML = "";
}

function analyze() {
  const text = document.getElementById("inputText").value.trim();

  // Clear previous results
  document.getElementById("result").innerText = "";
  document.getElementById("details").innerHTML = "";

  if (!text) {
    document.getElementById("result").innerText = "⚠️ Please enter some text.";
    return;
  }

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
  const clickbaitWords = [
    "shocking", "you won’t believe", "secret", "hidden", "what happened next",
    "miracle", "cure", "dangerous", "exposed", "banned", "explosive", "urgent"
  ];
  const vagueSources = [
    "experts say", "some people claim", "they say", "studies show", "researchers believe"
  ];
  const conspiracyKeywords = [
    "microchip", "bill gates", "5g", "plandemic", "deep state",
    "flat earth", "chemtrails", "illuminati", "crisis actors", "climate change hoax"
  ];

  const fakeClaimPatterns = [
    {
      keywords: ["vaccines", "autism"],
      reason: "Reference to debunked link between vaccines and autism.",
      weight: 7
    },
    {
      keywords: ["moon landing", "fake"],
      reason: "Claim suggesting the moon landing was faked.",
      weight: 7
    },
    {
      keywords: ["earth", "flat"],
      reason: "Flat Earth theory reference.",
      weight: 6
    },
    {
      keywords: ["climate change", "hoax"],
      reason: "Denial of scientifically proven climate change.",
      weight: 7
    },
    {
      keywords: ["government", "hiding", "truth"],
      reason: "General claim of hidden government secrets or coverups.",
      weight: 6
    },
    {
      keywords: ["government", "hiding", "aliens"],
      reason: "Classic conspiracy about government hiding alien contact.",
      weight: 6
    }
  ];

  const textLower = text.toLowerCase();

  // Heuristics
  if (upperCount > 20) {
    score += 4;
    reasons.push("Excessive use of uppercase letters.");
  }

  if (exclamations > 2) {
    score += 3;
    reasons.push("Overuse of exclamation marks.");
  }

  absoluteWords.forEach(word => {
    if (textLower.includes(word)) {
      score += 1;
      reasons.push(`Use of absolute term: "${word}"`);
    }
  });

  clickbaitWords.forEach(word => {
    if (textLower.includes(word)) {
      score += 3;
      reasons.push(`Possible sensational language: "${word}"`);
    }
  });

  vagueSources.forEach(phrase => {
    if (textLower.includes(phrase)) {
      score += 2;
      reasons.push(`Vague source detected: "${phrase}"`);
    }
  });

  conspiracyKeywords.forEach(keyword => {
    if (textLower.includes(keyword)) {
      score += 4;
      reasons.push(`Reference to conspiracy theory: "${keyword}"`);
    }
  });

  fakeClaimPatterns.forEach(pattern => {
    const match = pattern.keywords.every(word => textLower.includes(word));
    if (match) {
      score += pattern.weight;
      reasons.push(pattern.reason);
    }
  });

  let label;
  if (score >= 6) {
    label = "❌ Potentially Misleading";
  } else if (score >= 3) {
    label = "⚠️ Needs Caution";
  } else {
    label = "✅ Likely Trustworthy";
  }

  return { label, score, reasons };
}

// Clear content on page load
window.addEventListener("load", () => {
  clearText();
});

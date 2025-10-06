function analyzeText() {
  const text = document.getElementById("inputText").value.trim();
  const result = document.getElementById("result");

  if (text === "") {
    result.textContent = "⚠️ Please enter some text before analyzing.";
    result.style.color = "gray";
    return;
  }

  const redFlags = ["shocking", "you won't believe", "click here", "!!!", "miracle", "guaranteed", "everyone is talking", "BREAKING"];
  const capsCount = (text.match(/[A-Z]{2,}/g) || []).length;
  let score = 0;

  redFlags.forEach(flag => {
    if (text.includes(flag)) score++;
  });

  if (capsCount > 5) score++;

  if (score >= 3) {
    result.textContent = "❌ Warning: This content shows signs of possible misinformation.";
    result.style.color = "red";
  } else if (score === 2) {
    result.textContent = "⚠️ Caution: Some indicators suggest bias or manipulation.";
    result.style.color = "orange";
  } else {
    result.textContent = "✅ Likely trustworthy: No major red flags detected.";
    result.style.color = "green";
  }
}


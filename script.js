// Clear textarea and result on page load
window.onload = function () {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  if (input && result) {
    input.value = "";
    result.textContent = "";
  }
};

function analyzeText() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  const text = input.value.trim();

  if (text === "") {
    result.textContent = "⚠️ Please enter some text before analyzing.";
    result.style.color = "gray";
    return;
  }

  const redFlags = [
    "shocking",
    "you won't believe",
    "click here",
    "!!!",
    "miracle",
    "guaranteed",
    "everyone is talking",
    "BREAKING"
  ];

  let score = 0;
  redFlags.forEach(flag => {
    if (text.toLowerCase().includes(flag.toLowerCase())) score++;
  });

  const capsCount = (text.match(/[A-Z]{2,}/g) || []).length;
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

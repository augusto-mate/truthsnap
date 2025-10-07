# 🔍 TruthSnap

**TruthSnap** is a lightweight educational tool that simulates fake news detection through heuristic analysis.  
It analyzes user-submitted text to flag signs of manipulation based on tone, language, and structure — entirely offline and without relying on external APIs or machine learning.

## 🧠 The Problem

Misinformation spreads faster than truth — especially when wrapped in emotional, misleading language.  
Most people can’t easily distinguish between subtle manipulation and objective reporting.

## 💡 The Solution

TruthSnap offers a fast and intuitive “gut check” for any piece of written content. It simulates how fact-checkers might identify red flags using handcrafted rules based on:

- Emotional tone and exaggerated expressions  
- Clickbait markers (ALL CAPS, exclamation marks, absolutes)  
- Vague or unverifiable sources  
- Patterns found in common conspiracy claims

## ⚙️ How It Works

1. Paste a news excerpt or social media post.
2. Click **"Analyze"**.
3. TruthSnap returns a quick assessment:

   - ✅ **Likely Trustworthy**
   - ⚠️ **Needs Caution**
   - ❌ **Potentially Misleading**

## 🛠️ Tech Stack

- **HTML5** – Semantic structure  
- **CSS3** – Responsive layout  
- **JavaScript** – Core logic for text analysis  
- **Git & GitHub** – Version control and collaboration  

## 🧪 Features

- 🔍 Rule-based instant analysis  
- 🧠 Works 100% in-browser (no backend or data collection)  
- 📱 Responsive and mobile-friendly  
- 🎓 Educational use — great for awareness, not judgment  

## ⚠️ Limitations

TruthSnap is a **prototype and simulation**, not a factual truth engine. It relies on pattern matching and basic heuristics.

It may:

- Flag legitimate articles as suspicious (false positives)  
- Miss well-written misinformation (false negatives)  
- Not interpret nuance, sarcasm, or satire  
- Be limited to English-only input

For a more accurate assessment, consult professional fact-checking platforms.

> See [`FUTURE.md`](./FUTURE.md) for ideas on how this tool could evolve.

## 🚧 Planned Features

| Version | Feature                                 |
|---------|-----------------------------------------|
| 1.1     | Word frequency breakdown                |
| 1.2     | User feedback system ("Was this accurate?")  
| 2.0     | Backend with real-time fact-checking API support

## 🖼️ Screenshot

> _Coming soon — deploy the app and add a screenshot of the interface._

## 📂 Run Locally

```bash
git clone https://github.com/Augusto047/truthsnap.git
cd truthsnap
# Then open index.html in your browser
```

## 📄 License

This project is under the [MIT License](LICENSE)

## 👨‍💻 About the Author

**Augusto Mate**  
Frontend Developer passionate about tools that foster critical thinking.  
- 🔗 [LinkedIn](https://linkedin.com/in/augustomate)
- 💻 [GitHub](https://github.com/Augusto047)
- ✉️ mate.augusto.mz@gmail.com

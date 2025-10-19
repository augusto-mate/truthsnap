# 🔍 TruthSnap – Simulated Fake News Detection Tool

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen?style=flat-square&logo=firefox)](https://augusto-mate.github.io/truthsnap/)
![Last Commit](https://img.shields.io/github/last-commit/Augusto047/truthsnap?style=flat-square&logo=git)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&logo=open-source-initiative)

**TruthSnap** is a lightweight, browser-based tool that simulates fake news detection using handcrafted rules.  
It analyzes input text and flags potential signs of misinformation — all without external APIs or machine learning.

## 🎯 Pitch Deck
For a quick overview of the project, check out the presentation [here](./assets/PitchDeck_TruthSnap_2025.pdf).  

This short deck outlines the core idea behind **TruthSnap**.  
It's intended for stakeholders, collaborators, and anyone interested in the project's vision and potential impact.

## 🧠 The Problem

Misinformation spreads faster than facts — especially when disguised as emotional, exaggerated, or vague content.  
Most readers struggle to spot manipulation in headlines, articles, or viral posts.

## 💡 The Solution

**TruthSnap** offers a quick “gut check” for written content. It simulates how media experts or fact-checkers might evaluate language cues, tone, and structure using a rule-based system:

- Emotional intensity or exaggerated punctuation  
- Clickbait triggers (all-caps, exclamations, absolutes)  
- Vague or unverifiable sources  
- Common conspiracy-related keywords  
- Known patterns of misinformation

## ⚙️ How It Works

1. Paste a news excerpt or social media post  
2. Click **Analyze**  
3. Receive a risk label and reasoning:

- ✅ Likely Trustworthy  
- ⚠️ Needs Caution  
- ❌ Potentially Misleading

## 🧪 Features

- Instant rule-based analysis (no dependencies)  
- Fully runs in the browser — no login or data storage  
- Mobile-responsive interface  
- Debug mode for transparency  
- Clear button to reset input instantly  

## 🛠️ Tech Stack

- **HTML5** – semantic layout  
- **CSS3** – responsive, accessible UI  
- **JavaScript** – lightweight detection logic  
- **GitHub Pages** – live hosting & open source

## 🖼️ Screenshots

### 💻 Desktop
![Desktop Screenshot](./assets/screenshot-desktop.png)

### 📱 Mobile
![Mobile Screenshot](./assets/screenshot-mobile.jpg)

## 🧭 Intended Use & Limitations

**TruthSnap** is a **simulation**, not a definitive detector.  
It is based on **heuristic rules**, meaning:

- Some false claims may pass as neutral  
- Some true claims may be flagged  
- No connection to real-time fact-checking databases

👉 Best used as a tool for **awareness, education**, or **media literacy exercises**.

## 🗺️ Roadmap

Future improvements are listed in [`FUTURE.md`](FUTURE.md), including:

- Word frequency heatmap  
- Real-time content scraping  
- User feedback learning loop  
- NLP & AI integration  
- Multilingual support 

## 📂 Run locally

```bash
git clone https://github.com/augusto-mate/truthsnap.git
cd truthsnap
# Open index.html in your browser
```

## 📄 License

This project is under the [MIT License](LICENSE)

## 👨‍💻 About the Author

**Augusto Mate**  
Frontend Developer passionate about tools that empower critical thinking.  
- 🔗 [LinkedIn](https://linkedin.com/in/augusto-mate)
- 💻 [GitHub](https://github.com/augusto-mate)
- ✉️ mate.augusto.mz@gmail.com

---

🚀 **Live Demo**: [TruthSnap on GitHub Pages](https://augusto-mate.github.io/truthsnap/)

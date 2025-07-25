# 🦜 PollyGlot Translator 🌍

**Perfect Translation Every Time — powered by OpenAI & Cloudflare Workers**

---

## ✨ Overview

**PollyGlot** is a sleek, AI-powered translation web app that uses OpenAI’s `chat.completions` API under the hood to deliver *semantically rich*, *contextually aware*, and *natural-sounding* translations into selected target languages. It features a clean UI, intuitive UX, and is fully deployed using Cloudflare Pages + Cloudflare Workers.

---

## 📸 Preview

![PollyGlot UI Screenshot](./assets/screenshot.png)
*(Optional: Add a screenshot here to showcase the UI)*

---

## ⚙️ Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Frontend   | HTML5, CSS3, JavaScript (ES6+)                    |
| AI Model   | OpenAI GPT-3.5 (Chat Completions API)             |
| Backend    | Cloudflare Workers                                |
| Deployment | Cloudflare Pages + Workers                        |
| Hosting    | Static site (frontend) + Edge functions (backend) |

---

## 🔍 Features

* 🎯 Translate input text into:

  * 🌐 Arabic
  * 🈶 Japanese
  * 🇪🇸 Spanish
* 🧠 Smart translations with optional definitions
* ⚠️ Input validation with dynamic warnings
* 🔁 “Start Over” flow to reset translation
* 📦 Lightweight & fast: no frontend frameworks

---

## 🚀 Live Demo

👉 [Try the live app](https://translation-ai-app.osamaforedu.workers.dev/)
*(Replace with your Cloudflare Pages URL if different)*

---

## 🧰 How It Works

### 🔸 1. User Interface

* Textarea for input text
* Radio button group for target language
* Translate button triggers fetch to Cloudflare Worker

### 🔸 2. Cloudflare Worker

* Handles POST request with user prompt
* Constructs `system` + `user` messages for GPT
* Uses **OpenAI chat completions API** via [Cloudflare AI Gateway](https://developers.cloudflare.com/workers-ai/gateways/openai/)
* Sends back structured `translatedText`

### 🔸 3. Render Output

* Response is parsed and inserted back into the DOM
* User can hit “Start Over” to try again

---

## 📁 Project Structure

```
├── index.html             # Main frontend markup
├── index.css              # All styles (including responsive layout)
├── index.js               # Translation logic, UI handlers
├── /assets                # Flag images, background, etc.
└── /worker                # Cloudflare Worker backend (OpenAI handler)
```

---

## 🛠 Setup & Deployment

### 🔧 Prerequisites

* OpenAI API key
* Cloudflare account
* Wrangler CLI (`npm install -g wrangler`)

### 📦 Local Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/pollyglot-translator.git
   cd pollyglot-translator
   ```

2. Configure Cloudflare Worker:

   * Add your OpenAI API key to `wrangler.toml` or Cloudflare Secrets:

     ```bash
     wrangler secret put OPENAI_API_KEY
     ```

3. Deploy the worker:

   ```bash
   wrangler deploy
   ```

4. Deploy frontend via Cloudflare Pages (drag-and-drop or CI/CD)

---

## 📌 Important Notes

* The app uses **`temperature: 1.1`** for creativity in translation; reduce it for more deterministic output.
* All prompts are built dynamically to enable adaptive translation quality.
* Backend is designed with **CORS headers** to allow cross-origin requests safely.

---

## 🧠 Future Improvements

* 🔄 Add support for more languages
* 📱 Make UI fully responsive (mobile-first)
* 🗣️ Add text-to-speech support for output
* 💾 Cache translations locally
* 🌐 Detect source language automatically

---

## 🧑‍💻 Author

**Osama N. Abdlakareem**
[Email](mailto:osamaforedu@gmail.com) | [GitHub](https://github.com/osamaforedu)

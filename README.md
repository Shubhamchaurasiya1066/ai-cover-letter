# 🤖 AI Cover Letter Generator

An AI-powered web application that generates professional cover letters based on user input like skills, job role, and company details.

---

## 🚀 Features

- ✨ Clean and responsive UI
- 🤖 AI-generated cover letters
- 🔗 Integrated with AI API (OpenRouter)
- 🔄 Fallback logic (in case API fails)
- ⏳ Loading state ("Generating...")
- 📋 Copy to clipboard functionality
- 🔐 Secure API key handling using .env

---

## 🛠️ Tech Stack

- Frontend: React (Vite)
- Backend: Node.js + Express
- API: OpenRouter
- Styling: CSS

---

## ⚠️ Why OpenRouter Instead of Gemini?

Initially, I tried integrating Google Gemini API (free tier). However, I faced multiple issues such as:

- Model not found errors
- API key validation problems
- Limited access to available models in free tier

Due to these limitations, the API responses were inconsistent and unreliable.

To solve this, I switched to OpenRouter, which provides access to multiple free models and more stable responses.  
I also implemented fallback logic to ensure the application always generates output even if the API fails.

---

## 📂 Project Structure
ai-cover-letter/
│
├── src/
│ ├── components/
│ ├── App.jsx
│ ├── api.js
│
├── server/
│ ├── server.js
│ ├── .env
│
├── README.md
├── Prompts.md

---

### . Environment Variables

Create a `.env` file inside `server` folder:

---

### . Run Project

Start Backend:node server.js

Start Frontend:npm run dev

---

## 🌐 Live Demo

👉 (Add your Vercel link here)

---

## 📌 Learnings

- AI API integration
- Prompt engineering basics
- Handling real-world API failures
- Backend error handling
- Full-stack development workflow

---

## 🙌 Author

Shubham Chaurasiya

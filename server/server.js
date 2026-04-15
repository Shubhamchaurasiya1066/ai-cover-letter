const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENROUTER_API_KEY;

app.post("/generate", async (req, res) => {
  try {
    const { name, company, role, skills, description } = req.body;

    const prompt = `
Act as a professional HR manager.

Write a high-quality cover letter.

Candidate Name: ${name}
Company: ${company}
Role: ${role}
Skills: ${skills}
Job Description: ${description}

Make it professional, structured, and impactful.
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto", // ✅ FREE model
        messages: [
          { role: "user", content: prompt }
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const text = response.data.choices[0].message.content;

    res.json({ text });

  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);

    // 🔥 fallback (always works)
    const { name, company, role, skills } = req.body;

    res.json({
      text: `Dear Hiring Manager at ${company},

I am ${name}, applying for the ${role} role.

With skills in ${skills}, I am confident I can contribute effectively.

Thank you for your time.

Sincerely,
${name}`
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
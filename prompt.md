# 🧠 Prompt Design Notes

This file contains the prompts and approach I used while building the AI Cover Letter Generator.

---

## 🎯 Base Prompt I Used

I started with a simple structured prompt like:

Candidate Name: ${name}  
Company: ${company}  
Role: ${role}  
Skills: ${skills}  
Job Description: ${description}  

Then I asked the AI to generate a professional cover letter using this data.

---

## 🔧 Improvements I Made

Initially, the output was too basic.  
So I improved the prompt by adding instructions like:

- Write in a professional tone  
- Use proper paragraphs  
- Highlight relevant skills  
- Keep it concise but impactful  

This helped improve the quality of the output.

---

## 🧠 Final Prompt Structure

Act as a professional HR manager.

Write a cover letter using the following details:

Candidate Name: ${name}  
Company: ${company}  
Role: ${role}  
Skills: ${skills}  
Job Description: ${description}  

Make sure the response is well-structured and easy to read.

---

## ⚠️ Fallback Logic

Since API responses can sometimes fail, I added a manual template:

Dear Hiring Manager at ${company},

I am ${name}, applying for the ${role} role.

With my skills in ${skills}, I believe I can contribute effectively.

Thank you for your time and consideration.

Sincerely,  
${name}

---

## 🚀 What I Learned

- Small changes in prompts can significantly improve output  
- Clear instructions give better results  
- Handling API failure is important in real-world apps  
- Prompt design is an iterative process

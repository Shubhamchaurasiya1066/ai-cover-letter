import { useState } from "react";

export default function Form({ onGenerate }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" onChange={handleChange} />
      <input name="company" placeholder="Company Name" onChange={handleChange} />
      <input name="role" placeholder="Job Role" onChange={handleChange} />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} />
      <textarea name="description" placeholder="Job Description" onChange={handleChange} />

      <button type="submit">Generate Cover Letter</button>
    </form>
  );
}
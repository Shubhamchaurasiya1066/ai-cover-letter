import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Loader from "./components/Loader";
import { generateCoverLetter } from "./api";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async (data) => {
    setLoading(true);
    try {
      const res = await generateCoverLetter(data);
      setResult(res);
    } catch {
      alert("Error generating letter");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">✨ AI Cover Letter Generator</h1>

      <Form onGenerate={handleGenerate} />

      {loading && <Loader />}
      {result && <Result text={result} />}
    </div>
  );
}

export default App;
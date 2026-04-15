export default function Result({ text }) {
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div className="result-box">
      <pre>{text}</pre>
      <button className="copy-btn" onClick={copyText}>
        Copy
      </button>
    </div>
  );
}
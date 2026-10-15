import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  async function shortenUrl(e) {
    e.preventDefault();
    setError("");
    setShortUrl("");

    try {
      const response = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalUrl: url })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setShortUrl(data.shortUrl);
    } catch {
      setError("Cannot connect to backend. Make sure it is running.");
    }
  }

  function copyUrl() {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied!");
  }

  return (
    <div className="container">
      <h1>URL Shortener</h1>

      <form onSubmit={shortenUrl}>
        <input
          type="url"
          placeholder="Enter long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <div className="result">
          <p>Your short URL:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
          <br />
          <button onClick={copyUrl}>Copy</button>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
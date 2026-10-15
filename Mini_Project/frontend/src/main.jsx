import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const API = "http://localhost:5000";

function Login({ onLogin }) {
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      onLogin(data.user);
    } catch {
      setError("Cannot connect to backend.");
    }
  }

  return (
    <div className="login">
      <h1>URL Shortener</h1>
      <p>Login to continue</p>

      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button>Login</button>
      </form>

      <small>Demo: demo@example.com / 123456</small>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

function Dashboard({ user, logout }) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [stats, setStats] = useState({ total: 0, clicks: 0, urls: [] });

  async function loadStats() {
    const response = await fetch(`${API}/api/urls`);
    const data = await response.json();
    setStats(data);
  }

  useEffect(() => {
    loadStats();
  }, []);

  async function shorten(e) {
    e.preventDefault();
    setError("");
    setShortUrl("");

    try {
      const response = await fetch(`${API}/api/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setShortUrl(data.shortUrl);
      setUrl("");
      loadStats();
    } catch {
      setError("Cannot connect to backend.");
    }
  }

  function copyUrl() {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied!");
  }

  return (
    <div className="dashboard">
      <header>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {user.name}</p>
        </div>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="cards">
        <div className="card">
          <strong>{stats.total}</strong>
          <span>Total URLs</span>
        </div>
        <div className="card">
          <strong>{stats.clicks}</strong>
          <span>Total Clicks</span>
        </div>
      </div>

      <section className="box">
        <h2>Create Short URL</h2>
        <form onSubmit={shorten}>
          <input
            type="url"
            placeholder="https://example.com/very/long/url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />
          <button>Shorten</button>
        </form>

        {error && <p className="error">{error}</p>}

        {shortUrl && (
          <div className="result">
            <b>Short URL:</b>{" "}
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
            <button onClick={copyUrl}>Copy</button>
          </div>
        )}
      </section>

      <section className="box">
        <h2>Recent URLs</h2>
        {stats.urls.length === 0 ? (
          <p>No URLs created yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Original URL</th>
                <th>Short URL</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              {stats.urls.map(item => (
                <tr key={item.code}>
                  <td>{item.originalUrl}</td>
                  <td>
                    <a href={item.shortUrl} target="_blank" rel="noreferrer">
                      {item.shortUrl}
                    </a>
                  </td>
                  <td>{item.clicks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return <Dashboard user={user} logout={() => setUser(null)} />;
}

createRoot(document.getElementById("root")).render(<App />);
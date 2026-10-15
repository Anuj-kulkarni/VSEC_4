const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Basic demo storage. Data resets when the server restarts.
const users = new Map();
const urls = new Map();

// Demo account
users.set("demo@example.com", { password: "123456", name: "Demo User" });

function createCode() {
  return crypto.randomBytes(4).toString("base64url");
}

// Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({
    message: "Login successful",
    user: { email, name: user.name }
  });
});

// Get dashboard data
app.get("/api/urls", (req, res) => {
  const list = [...urls.values()];
  res.json({
    total: list.length,
    clicks: list.reduce((sum, item) => sum + item.clicks, 0),
    urls: list
  });
});

// Create short URL
app.post("/api/shorten", (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    new URL(originalUrl);
  } catch {
    return res.status(400).json({ message: "Please enter a valid URL" });
  }

  const code = createCode();
  const item = {
    code,
    originalUrl,
    shortUrl: `http://localhost:${PORT}/${code}`,
    clicks: 0
  };

  urls.set(code, item);
  res.json(item);
});

// Redirect
app.get("/:code", (req, res) => {
  const item = urls.get(req.params.code);

  if (!item) {
    return res.status(404).send("Short URL not found");
  }

  item.clicks++;
  res.redirect(item.originalUrl);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
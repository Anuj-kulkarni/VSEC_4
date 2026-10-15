const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simple in-memory storage.
// Data will reset when the server restarts.
const urls = new Map();

function createCode() {
  return crypto.randomBytes(4).toString("base64url");
}

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
  urls.set(code, { originalUrl, clicks: 0 });

  res.json({
    shortUrl: `http://localhost:${PORT}/${code}`,
    code
  });
});

app.get("/:code", (req, res) => {
  const item = urls.get(req.params.code);

  if (!item) {
    return res.status(404).send("Short URL not found");
  }

  item.clicks++;
  res.redirect(item.originalUrl);
});

app.get("/api/stats/:code", (req, res) => {
  const item = urls.get(req.params.code);

  if (!item) {
    return res.status(404).json({ message: "Short URL not found" });
  }

  res.json({
    originalUrl: item.originalUrl,
    shortUrl: `http://localhost:${PORT}/${req.params.code}`,
    clicks: item.clicks
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
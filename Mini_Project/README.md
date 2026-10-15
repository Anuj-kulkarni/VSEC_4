# Basic URL Shortener

A beginner-friendly URL shortener using React, Node.js and Express.

## Project structure

url-shortener/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   └── README.md
└── README.md

## Requirements

Install Node.js.

## 1. Start backend

Open a terminal:

```bash
cd backend
npm install
npm start
```

Backend:
http://localhost:5000

## 2. Start frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown by Vite, normally:
http://localhost:5173

## How it works

1. Enter a long URL.
2. React sends it to the Express API.
3. Express creates a random short code.
4. The backend stores the original URL.
5. The frontend displays the short URL.
6. Opening the short URL redirects to the original URL.

## Important

This is intentionally a basic learning project. URLs are stored only in server memory, so they disappear when the backend restarts.

For a more realistic project, replace the in-memory Map with MongoDB and add authentication, URL expiration, analytics and rate limiting.

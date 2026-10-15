# URL Shortener - Login + Dashboard

## Features

- Login page
- Simple demo authentication
- Dashboard
- URL shortening
- Short URL redirect
- Total URL count
- Total click count
- Recent URLs table
- Copy short URL
- Minimal CSS

## Demo login

Email: demo@example.com
Password: 123456

## Run backend

```bash
cd backend
npm install
npm start
```

Backend runs at http://localhost:5000

## Run frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL, normally http://localhost:5173

## Important

This is a learning/demo project. Authentication is intentionally simple and does not use JWT or a permanent database. User and URL data are stored in memory and reset when the backend restarts.

For a production version, use MongoDB, hashed passwords, JWT/session authentication, validation, rate limiting, and HTTPS.

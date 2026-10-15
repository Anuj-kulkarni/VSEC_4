# VSEC Semester 5 Assignments

Course: VSEC – 4 Course, Semester 5

Course coordinator: Ms. D. R. Gatne

This repository collects the coursework and mini project for the course. Each assignment is kept in its own folder.

## Assignments

| Folder | Work included |
| --- | --- |
| [`Assignment_1`](Assignment_1/) | Basic HTML pages: a login page, home page, and linked CSS files. |
| [`Assignment_2`](Assignment_2/) | Four-block click interaction page (`index.html`) and its stylesheet. |
| [`Assignment_3`](Assignment_3/) | Marksheet form page and screenshots (`Image_1.png`, `Image_2.png`). |
| [`Assignment_4`](Assignment_4/) | Login form page with a JavaScript reference in `index.html`. |
| [`Assignment_5`](Assignment_5/) | MongoDB shell examples for inserting, finding, updating, and deleting student documents (`Quries.txt`), with recorded output in `Output.txt`. |
| [`Assignment_6`](Assignment_6/) | Student marks entry page with a results table and JavaScript reference in `index.html`. |
| [`Assignment_7`](Assignment_7/) | In-memory Express student API in [`Api.js`](Assignment_7/Api.js). |
| [`Assignment_8`](Assignment_8/) | MongoDB-backed Express student API in [`MongoDB.js`](Assignment_8/MongoDB.js), using the `college.students` collection. |
| [`Assignment_9/app`](Assignment_9/app/) | React counter using `useState`, with increment, decrement, and reset buttons. |
| [`Assignment_10`](Assignment_10/) | React text input that updates an `h1` preview as the user types. |
| [`Assignment_11`](Assignment_11/) | React Daily Mood Card with name and mood inputs, a live preview, and reset. |
| [`Mini_Project`](Mini_Project/) | URL shortener with a React/Vite frontend and Express backend. Shortened URLs are kept in backend memory. |

## Running the React apps

The React projects use Create React App. Open a terminal in the relevant project folder, install dependencies, and start the development server:

```bash
cd Assignment_9/app
npm install
npm start
```

Use the same commands from `Assignment_10` or `Assignment_11` to run those apps. The development server prints the local URL when it starts (usually `http://localhost:3000`).

## Running the mini project

Start the backend and frontend in separate terminals:

```bash
cd Mini_Project/backend
npm install
npm start
```

```bash
cd Mini_Project/frontend
npm install
npm run dev
```

The backend listens on port `5000`; Vite prints the frontend URL, usually `http://localhost:5173`. The backend stores shortened URLs in memory, so they are cleared when it restarts.

## API assignment notes

- Assignment 7 defines `GET /Students`, `POST /addStudent`, `PUT /Students/:id`, and `DELETE /delete/:id`. It listens on port `3000` and stores records in memory.
- Assignment 8 defines `GET /Students`, `GET /Students/:id`, `POST /addStudent`, `PUT /Students/:id`, and `DELETE /Students/:id`. It connects to MongoDB at `mongodb://127.0.0.1:27017` and listens on port `3000` after connecting. Start a local MongoDB server before running it.

## Technologies represented

HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.

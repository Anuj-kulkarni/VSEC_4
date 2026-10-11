import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('Happy');

  const displayName = name.trim() || 'Friend';

  function resetCard() {
    setName('');
    setMood('Happy');
  }

  return (
    <main className="app">
      <section className="card">
        <h1>Daily Mood Card</h1>
        <p className="intro">Create a small message using React useState.</p>

        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="mood">Choose your mood</label>
        <select
          id="mood"
          value={mood}
          onChange={(event) => setMood(event.target.value)}
        >
          <option>Happy</option>
          <option>Excited</option>
          <option>Calm</option>
          <option>Focused</option>
        </select>

        <div className="preview">
          <h2>
            {displayName} is feeling {mood}
          </h2>
        </div>

        <button type="button" onClick={resetCard}>
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;

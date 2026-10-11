import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="counter-page">
      <section className="counter-panel" aria-labelledby="counter-title">
        <p className="counter-kicker">React useState Counter</p>
        <h1 id="counter-title">Counter App</h1>
        <p className="counter-value" aria-live="polite">
          {count}
        </p>
        <div className="counter-actions">
          <button type="button" onClick={() => setCount(c => c + 1)}>
            Add +1
          </button>
          <button type="button" onClick={() => setCount(c => c - 1)}>
            Minus -1
          </button>
          <button type="button" className="secondary" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

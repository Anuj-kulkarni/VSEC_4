import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <main className="app">
      <section className="box">
        <h2>Text to H1 Display</h2>
        <label htmlFor="textInput">Enter text</label>
        <input
          id="textInput"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type something here"
        />
        <div className="result">
          <h1>{text || 'Your text will appear here'}</h1>
        </div>
      </section>
    </main>
  );
}

export default App;

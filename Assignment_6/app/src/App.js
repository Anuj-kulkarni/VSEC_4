import './App.css';
import { useState } from 'react';

function App() {
  const [name, setname] = useState("Hello World");
  return (
    <div className="App">
      <br></br>
      Enter Any Text To Display in Larger Format: <input type="text" onChange={(e) => setname(e.target.value)}></input>
      <br></br>
      Larger Text == <h1>{name}</h1>
    </div>
  );
}


export default App;


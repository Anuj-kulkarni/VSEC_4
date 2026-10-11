import React, { useState } from "react";

export default function Counter() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Increment handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); // Safe update using previous state
  };

  // Decrement handler (with lower bound check)
  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Reset handler
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h2>React Counter using useState</h2>
      <p style={styles.count}>{count}</p>
      <div>
        <button onClick={handleIncrement} style={styles.button}>+</button>
        <button onClick={handleDecrement} style={styles.button}>-</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}

// Inline styles for simplicity
const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  count: { fontSize: "2rem", fontWeight: "bold" },
  button: { margin: "5px", padding: "10px 20px", fontSize: "1rem" }
};

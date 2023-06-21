import React, { useState, useEffect } from "react";
import "./App.css";

/// counter component
//
function Counter({ title, onIncrement, onReset }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    onIncrement();
  }

  useEffect(() => {
    onReset(() => setCount(0));
  }, [onReset]);

  return (
    <div className="counter">
      <button className="flex-item nameColour" onClick={increment}>
        {title}
      </button>
      <p className="flex-item">{count}</p>
    </div>
  );
}

// total component
//
function Total({ count }) {
  return (
    <div className="counter">
      <h2 className="flex-item">Total</h2>
      <p className="flex-item">{count}</p>
    </div>
  );
}

// Main APP
//
function App() {
  const [total, setTotal] = useState(0);
  const [resetCallbacks, setResetCallbacks] = useState([]);

  function handleIncrement() {
    setTotal(total + 1);
  }

  function handleReset() {
    setTotal(0);
    resetCallbacks.forEach((callback) => callback());
  }

  function handleResetCallback(callback) {
    setResetCallbacks((prev) => [...prev, callback]);
  }

  return (
    <div className="container">
      <Counter title="Vegetarian" onIncrement={handleIncrement} onReset={handleResetCallback} />
      <Counter title="Halal" onIncrement={handleIncrement} onReset={handleResetCallback} />
      <Counter title="Vegan" onIncrement={handleIncrement} onReset={handleResetCallback} />
      <Counter title="Gluten-free" onIncrement={handleIncrement} onReset={handleResetCallback} />
      <Counter title="Kosher" onIncrement={handleIncrement} onReset={handleResetCallback} />
      <Total count={total} />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

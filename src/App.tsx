import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1 style={{ color: count < 0 ? "red" : "black" }}>{count}</h1>
      <button onClick={handleIncrement}>Aggiungi</button>
      <button onClick={handleDecrement}>Sottrai</button>
    </div>
  );
};

export default App;

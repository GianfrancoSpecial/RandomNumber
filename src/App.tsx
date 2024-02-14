import React, { useState } from "react";

const App: React.FC = () => {
  const [buttonText, setButtonText] = useState<string>("Start");

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    setButtonText(randomNumber.toString());
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleClick} style={{ fontSize: "24px" }}>
        {buttonText}
      </button>
    </div>
  );
};

export default App;

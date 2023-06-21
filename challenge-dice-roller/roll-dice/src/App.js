import "./App.css";
// import { useState } from "react";
import DiceEquation from "./DiceEquation";

function App() {
  return (
    <div className="App">
      <DiceEquation diceFaces={6} />
    </div>
  );
}

export default App;

import React from "react";
import BabyNamesList from "./components/BabyNamesList";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Baby Name Picker</h1>
      <br />
      <div className="bar-line"></div>

      <BabyNamesList />
      <div className="bar-line"></div>
    </div>
  );
};

export default App;

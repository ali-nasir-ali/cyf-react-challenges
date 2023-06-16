import React from "react";
import SearchBar from "./components/SearchBar";
import BabyNamesList from "./components/BabyNamesList";
import "./App.css";

const App = () => {
  return (
    <div className="main-app">
      <h1>Baby Name Picker</h1>
      <SearchBar />
      <br />
      <div className="bar-line"></div>

      <BabyNamesList />
      <div className="bar-line"></div>
    </div>
  );
};

export default App;

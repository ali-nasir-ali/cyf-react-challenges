import React, { useState } from "react";
import HighScoreTable from "./Components/HighScoreTable";
import scoresData from "./Data/scores";
import "./App.css";

function App() {
  const [isDescending, setIsDescending] = useState(true);

  const sortedCountries = scoresData.sort((a, b) => a.name.localeCompare(b.name));

  sortedCountries.forEach((country) => {
    country.scores.sort((a, b) => (isDescending ? b.score - a.score : a.score - b.score));
  });

  const toggleSortOrder = () => {
    setIsDescending(!isDescending);
  };

  return (
    <div className="App">
      <h1>High Scores Per Country</h1>
      <button onClick={toggleSortOrder}>Toggle Sort Order</button>
      {sortedCountries.map((countryData) => (
        <HighScoreTable key={countryData.name} country={countryData.name} scores={countryData.scores} />
      ))}
    </div>
  );
}

export default App;

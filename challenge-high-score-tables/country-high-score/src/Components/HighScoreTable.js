import React from "react";
import PlayerScore from "./PlayerScore";

function HighScoreTable({ country, scores }) {
  return (
    <div className="high-score-table">
      <h2>HIGH SCORES: {country}</h2>
      <table>
        <thead></thead>
        <tbody>
          {scores.map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HighScoreTable;

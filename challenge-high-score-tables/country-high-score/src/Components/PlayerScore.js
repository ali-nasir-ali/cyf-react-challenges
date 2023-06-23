import React from "react";

function PlayerScore({ name, score }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
}

export default PlayerScore;

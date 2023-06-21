import React, { useState } from "react";

function DiceEquation(props) {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [result, setResult] = useState(null);

  function handleENterNumber(num) {
    num > 0 && setNumberOfDice(num);
  }

  function rollDice() {
    let result = 0;
    for (let i = 1; i <= numberOfDice; i++) {
      result += Math.floor(Math.random() * props.diceFaces) + 1;
    }
    setResult(result);
  }

  return (
    <div>
      <h4>
        {" "}
        <input onChange={(e) => handleENterNumber(e.target.value)} value={numberOfDice} type="number" min="1" max="40" />
        {props.diceFaces}d ={result}
      </h4>
      <button className="btn btn-primary" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}

export default DiceEquation;

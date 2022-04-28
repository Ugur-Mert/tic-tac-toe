import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true); // True = x, false = o

  const boxClick = (boxId) => {
    const updatedBoard = board.map((value, i) => {
      if (i === boxId) {
        return player === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    setPlayer(!player);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe!</h1>
      <h1>Player: {player === true ? "X" : "O"}</h1>
      <Board board={board} onClick={boxClick} />
    </div>
  );
}

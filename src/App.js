import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board";
export default function App() {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  const [resetGame, setResetGame] = useState(false);

  //turns

  function boxClick(boxIndex) {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return currentPlayer ? "X" : "O";
      } else {
        return value;
      }
    });
    //Winner
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }
    console.log(score);

    setBoard(updatedBoard);

    setCurrentPlayer(!currentPlayer);
  }

  function checkWinner(board) {
    for (let i = 0; i < winCondition.length; i++) {
      const [x, y, z] = winCondition[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        setResetGame(true);
        return board[x];
      }
    }
  }

  function newGame() {
    setBoard(Array(9).fill(null));
    setResetGame(false);
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <h1>Player: {currentPlayer ? "X" : "O"} </h1>
      <h1>
        X Score: {score.xScore} - O Score: {score.oScore}
      </h1>
      <Board board={board} onClick={resetGame ? newGame : boxClick} />
      <button className="reset-btn" onClick={newGame}>
        Reset Game
      </button>
    </div>
  );
}

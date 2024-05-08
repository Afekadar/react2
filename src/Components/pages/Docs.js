import React, { useState } from "react";
import { Board } from "./TicTacToe/Board";

export const Docs = () => {
  //what is going on here in this logic
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  };
  return (
    <div className="App">
      <h1 className="top">Tic Tac Toe</h1>
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
};

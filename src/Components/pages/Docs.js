import React from "react";
import { Board } from "./TicTacToe/Board";

export const Docs = () => {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board board={board} onClick={null} />
    </div>
  );
};

import React from "react";
import { Board } from "./TicTacToe/Board";

export const Docs = () => {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
};

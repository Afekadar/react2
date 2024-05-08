import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onClick }) => {
  return (//just a styling for the board to make it a 3x3 
    <div className="board">
      {board.map((value, idx) => {
        return <Box value={value} onClick={() => onClick(idx)} />;
      })}
    </div>
  );
};

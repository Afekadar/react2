import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">//just a styling for the board to make it a 3x3 
      {board.map((value, idx) => {
        return <Box value={value} onClick={() => onClick(idx)} />;
      })}
    </div>
  );
};

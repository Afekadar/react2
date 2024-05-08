import React, { useState } from "react";
import { Board } from "./TicTacToe/Board";
import { ScoreBoard } from "./TicTacToe/ScoreBoard";

export const Docs = () => {
  const WINCON = [
    //all the possible ways to win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //what is going on here in this logic
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WINCON.length; i++) {
      const [x, y, z] = WINCON[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  };
  return (
    <div className="App">
      <h1 className="top">Tic Tac Toe</h1>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
};

import { calculateWinner } from "../utils/game";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const gameBoard = [];

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  }

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = "Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  for (let row = 0; row < 3; row++) {
    const boardRow = [];

    for (let col = 0; col < 3; col++) {
      let index = row * 3 + col;

      boardRow.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
          isWinning={winningLine.includes(index)}
        />
      );
    }

    gameBoard.push(
      <div key={row} className="board-row">
        {boardRow}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {gameBoard}
    </>
  );
}

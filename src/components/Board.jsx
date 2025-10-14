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
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
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
        />
      );
    }

    gameBoard.push(
      <div key={row} className="board-row">
        {boardRow}
      </div>
    );
  }

  return <>{gameBoard}</>;
}

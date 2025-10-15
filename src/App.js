import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), moveIndex: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;
  const [isAscending, setIsAscending] = useState(true);

  function handlePlay(nextSquares, moveIndex) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, moveIndex }, // store both
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    return;
  }

  const moves = history.map((step, move) => {
    const { moveIndex } = step;
    let description;

    if (move > 0) {
      const row = Math.floor(moveIndex / 3);
      const col = moveIndex % 3;
      description = `Go to move #${move} (${row}, ${col})`;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        {currentMove === move ? (
          move === 0 ? (
            "You are at game start"
          ) : (
            `You are at move #${move} (${Math.floor(moveIndex / 3)}, ${
              moveIndex % 3
            })`
          )
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </button>

        <ol>{isAscending ? moves : moves.slice().reverse()}</ol>
      </div>
    </div>
  );
}

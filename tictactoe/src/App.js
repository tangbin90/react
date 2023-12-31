import React from 'react';
import { useState } from 'react';

// React components need to return a single JSX element and not multiple adjacent 
//JSX elements like two buttons. To fix this you can use fragments (<> and </>) to wrap multiple adjacent JSX elements like this:
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i]="X";
    setSquares(nextSquares);
  }
// Notice the new () => syntax. Here, () => handleClick(0) is an arrow function, 
// which is a shorter way to define functions. When the square is clicked, the code after the => “arrow” will run, calling handleClick(0).
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

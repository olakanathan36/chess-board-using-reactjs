import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [chessBoard, setChessBoard] = useState([]);
  const n = 8;
  const m = 8;

  useEffect(() => {
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });
      result.push(row);
    }
    setChessBoard(result);
  }, []);

  return (
    <>
      {chessBoard.length > 0 && chessBoard.map((row, rIndex) => {
        return (
          <div className="row" key={rIndex}>
            {row.map((_, cIndex) => {
              return (
                <div
                  className={`box ${rIndex + cIndex} % 2 === 0 ? 'black' : 'white'}`}
                  key={cIndex}
                ></div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default App;
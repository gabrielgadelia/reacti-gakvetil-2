import { useState } from "react";
import Player from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playerTurns, setPlayerTurns] = useState([]);

  function handleCurrentPlayerChange(rowIndex, colIndex) {
    setCurrentPlayer((prevValue) => (prevValue === "X" ? "O" : "X"));

    setPlayerTurns((prevGameTurns) => {
      let activePlayer = "X";

      if (prevGameTurns.length > 0 && prevGameTurns[0] === "X") {
        currentPlayer === "X";
      }

      const updateTurns = [
        { symbol: activePlayer, square: { row: rowIndex, col: colIndex } },
        ...prevGameTurns,
      ];
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard
          currentPlayer={currentPlayer}
          onSquareSeelct={handleCurrentPlayerChange}
        />
      </div>

      <Log />
    </main>
  );
}

export default App;

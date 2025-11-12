import { useState } from "react";
import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [player1, setPlayer1] = useState({ rolledDice: null, score: 0 });
  const [player2, setPlayer2] = useState({ rolledDice: null, score: 0 });
  const [round, setRound] = useState(0);
  const gameOverCount = 5;

  const isGameOver = round > gameOverCount;

  const currentPlayer = () => {
    if (player1.rolledDice !== null) {
      return 2
    }

    return 1;
  };

  const winner = () => {
    if (player1.rolledDice === null || player2.rolledDice === null) {
      return null;
    }

    if (player1.rolledDice > player2.rolledDice) {
      return "Player 1";
    } else if (player2.rolledDice > player1.rolledDice) {
      return "Player 2";
    } else {
      return "tie";
    }
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer() === 1) {
      setPlayer1((prev) => ({...prev, rolledDice: randomNumber}) );
    } else {
      setPlayer2((prev) => ({...prev, rolledDice: randomNumber}) );
    }
  };

  const playnNextRound = () => {
    setPlayer1((prev) => ({...prev, rolledDice: null}) );
    setPlayer2((prev) => ({...prev, rolledDice: null}) );
    setRound(round + 1);

    if (player1.rolledDice > player2.rolledDice) {
      setPlayer1((prev) => ({...prev, score: prev.score + 1}) )
    }else if (player2.rolledDice > player1.rolledDice) {
      setPlayer2((prev) => ({...prev, score: prev.score + 1}) )
    }

  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(1);
  };

  if (isGameOver) {
      return <GameOverScreen playAgain={playAgain} />;
  }

  return(
    <GameScreen
    
      currentPlayer={currentPlayer}
      player1={player1.rolledDice}
      player2={player2.rolledDice}
      rollDice={rollDice}
      winner={winner}
      playnNextRound={playnNextRound}
      round={round}

    />
  )
}

export default App;
import { useState } from "react";
import DiceTitle from "./assets/components/DiceTitle";
import Winner from "./assets/components/Winner.jsx";

function App() {

const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const [player1Dice, setPlayer1Dice] = useState(null);
const [player2Dice, setPlayer2Dice] = useState(null);
const [currentDice, setCurrentDice] = useState(1);
const [gameWinner, setGameWinner] = useState(null);

const rollDice = () => {
  const playerRandomNumber =  Math.floor(Math.random() * 6) + 1;
  if (currentDice === 1) {
    setPlayer1Dice(playerRandomNumber)
    setCurrentDice(2);
  } else {
    setPlayer2Dice(playerRandomNumber)
    setCurrentDice(1); 
    determineWinner(playerRandomNumber);
  };
}

  const getWinner = () => {
    if (player1Dice === null || player2Dice === null) return "";
    if (player1Dice > player2Dice) return "Player 1 wins!";
    if (player2Dice > player1Dice) return "Player 2 wins!";
    return "It's a tie!";
  };

  const resetGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setCurrentPlayer(1);
  };

const determineWinner = (player2rolled) => {
  if (player1Dice > player2rolled) {
    setGameWinner("Player 1");
  } else if (player2rolled > player1Dice) {
    setGameWinner("Player 2");
  } else {
    setGameWinner("It's a tie!");
  }
}

  return (
    <>
        <div 
          style={{
            textAlign:"center",
            padding: "20px",
            margin: 0,
          }}
        >
          <h1>Dice Game</h1>

          <DiceTitle 
          title="player 1" 
          index={player1Dice ? player1Dice - 1 : 0}
          generateRandomDice={
            () => {rollDice()}
          } isDisabled={currentDice !== 1}
          />

          <div>VS</div>

          <DiceTitle 
          title="player 2" index={player2Dice - 1} 
          generateRandomDice={
            () => {rollDice()}} isDisabled={currentDice !== 2} />
          </div>

        <h2 style={{
          textAlign: "center",
          marginTop: "30px",
        }}>
          {gameWinner}</h2>

          <Winner winnerText={getWinner()} onReset={resetGame} />
    </>
  )
}

export default App

import { useState } from "react";
import DiceTitle from "./assets/components/DiceTitle";

function App() {

const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const [player1Dice, setPlayer1Dice] = useState(1);
const [player2Dice, setPlayer2Dice] = useState(1);
const [currentDice, setCurrentDice] = useState(1);

const rollDice = () => {
  const playerRandomNumber =  Math.floor(Math.random() * 6) + 1;
  if (currentDice === 1) {
    setPlayer1Dice(playerRandomNumber)
    setCurrentDice(2);
  } else {
    setPlayer2Dice(playerRandomNumber)
    setCurrentDice(1); 
  };
}

// const diceRoll = () => {
//   const playerRandomNumber =  Math.floor(Math.random() * 6) + 1;
//   setPlayer2Dice(playeerRandomNumbr);
// }

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
        dice={player1Dice - 1}
        generateRandomDice={
          () => {rollDice()}
        } isDisabled={currentDice !== 1}
         />

        <div>VS</div>

        <DiceTitle 
        title="player 2" dice={player2Dice - 1} 
        generateRandomDice={
          () => {rollDice()}} isDisabled={currentDice !== 2}/>
        </div>
      
    </>
  )
}

export default App

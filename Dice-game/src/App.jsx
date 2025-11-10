import { useState } from "react";
import Player from "./components/Player.jsx";
import WinnerBanner from "./components/WinnerBanner.jsx";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [round, setRound] = useState(1); // ✅ Track the current round
  const [totalRounds, setTotalRounds] = useState(5);

  const current = () => {
    if (player1 === null) return 1;
    return 2;
  }

const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (current() === 1) {
      setPlayer1(randomNumber);
    } else {
      setPlayer2(randomNumber);

    }
  };

  const winner = () => {
    if (player2 === null) {
      return null
    }

    if (player1 > player2) {
      return "Player 1 Wins!";
    } else if (player2 > player1) {
      return "Player 2 Wins!";
    } else {
      return "It's a Tie!";
    }
  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(round + 1);
    if(round === totalRounds){
      alert("Game Over! Starting a new game.");
      setRound(1);
      setTotalRounds(5);
    }
  
  };
return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >

       <h1>🎲 2-Player Dice Game</h1>
      <h2>Round {round} / {totalRounds}</h2>


      <h1>2-Player Dice Game</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Player
          title={"Player 1"}
          index={player1}
          handleClick={rollDice}
          isDisabled={current() === 2 || winner() !== null}
        />

        <div style={{ fontSize: "40px" }}>VS</div>

        <Player
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={current() === 1 || winner() !== null}
        />
      </div>
      
    {winner() && (
        <WinnerBanner
          winner={winner()}
          onPlayAgain={playAgain}
          rounds={round}
        />
      )}
    </div>
  );
}

export default App;

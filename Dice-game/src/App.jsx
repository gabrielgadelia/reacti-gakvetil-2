import DiceTitle from "./assets/components/DiceTitle";

function App() {

const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];


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
        dice="⚀" />

        <DiceTitle 
        title="player 2" 
        dice="⚀" />
        
        </div>
      
    </>
  )
}

export default App

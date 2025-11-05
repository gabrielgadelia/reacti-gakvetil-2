const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function Player({ title, index, handleClick, isDisabled }) {
  let buttonStyle = isDisabled
    ? { ...baseStyle, ...disabledStyle }
    : { ...baseStyle };

    


  return (
    <>
      <div>
        <h3>{title}</h3>
        <div style={{ fontSize: "60px" }}>{diceEmojis[index - 1]}</div>
        <button onClick={handleClick} style={buttonStyle} disabled={isDisabled}>
          Roll Dice
        </button>
      </div>
    </>
  );
}

const disabledStyle = {
  backgroundColor: "#9e9e9e",
  cursor: "not-allowed",
  opacity: 0.6,
};

const baseStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
};





// export default function DiceTitle({title, index, generateRandomDice, isDisabled}) {
//     const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

//     return(
//          <div>
//             <h3>{title}</h3>
//             <div style={{fontSize: "60px"}}>{diceEmojis[index - 1]}</div>

//             <button onClick={generateRandomDice } disabled={isDisabled}>CLICK TO GET DICE</button>
//           </div>
//     )
// }


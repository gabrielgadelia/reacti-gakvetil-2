export default function DiceTitle({title, dice, generateRandomDice, isDisabled}) {
    const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    return(
         <div>
            <h3>{title}</h3>
            <div style={{fontSize: "60px"}}>{diceEmojis[dice]}</div>

            <button onClick={generateRandomDice } disabled={isDisabled}>CLICK TO GET DICE</button>
          </div>
    )
}
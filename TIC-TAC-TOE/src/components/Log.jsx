export default function Log([playerTurns]) {
  return (
    <ol id="log">
      {playerTurns.map((turn, index) => {
        <li key={index}>
          {`Player ${turn.symbol} placed on row ${turn.square.row + 1}, col ${
            turn.square.col + 1
          }`}
        </li>;
      })}
    </ol>
  );
}

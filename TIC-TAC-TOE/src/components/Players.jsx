import { useState } from "react";

export default function Players({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{player}</span>;

  if (isEditing) {
    playerName = <input type="text" defaultValue={player} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>Edits</button>
      </span>
    </li>
  );
}

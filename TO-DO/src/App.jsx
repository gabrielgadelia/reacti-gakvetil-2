import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);

  const presetTasks = [
    { id: nanoid(), text: "ვხატავთ საღამოს ცაზე ვარსკვლავებს" },
    { id: nanoid(), text: "ჩაივით გულს ვათბობთ მეგობრებთან" },
    { id: nanoid(), text: "ვიკარგებით მუსიკის ხმებში" },
    { id: nanoid(), text: "ვმსუნთქავთ მშვიდი ღამის სიგრილეს" },
    { id: nanoid(), text: "ჩვენ გვიყვარს გზა, რომელიც წინ მიდის" },
    { id: nanoid(), text: "ყოველ ნაბიჯზე ვპოულობთ პატარა სიხარულს" },
    { id: nanoid(), text: "და კვლავ ვაგრძელებთ გზას სიმშვიდით" },
  ];

  const appendNote = (text) => {
    const fresh = { id: nanoid(), text };
    setNotes([...notes, fresh]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <div className="Start">
      <h1>Todo List</h1>

      <div className="todo-list">
        {notes.length === 0 && (
          <div className="empty">list is empty</div>
        )}

        {notes.length > 0 && (
          <>
            {notes.map((task) => (
              <div className="item" key={task.id}>
                <p>{task.text}</p>
                <button onClick={() => removeNote(task.id)}>delete</button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="buttons">
        <h2>I am not evil just love madrid</h2>

        <div className="container">
          {presetTasks.map((entry) => (
            <button
              key={entry.id}
              className="preset-button"
              onClick={() => appendNote(entry.text)}
            >
              {entry.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

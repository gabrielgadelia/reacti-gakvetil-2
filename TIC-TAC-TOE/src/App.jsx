import Players from "./components/Players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players player="player 1" symbol="o" />
          <Players player="player 2" symbol="x" />
        </ol>
      </div>
    </main>
  );
}

export default App;

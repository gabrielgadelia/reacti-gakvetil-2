import { useState } from 'react'
import CounterButtons from "./components/counterButtons.jsx";
import CounterDisplay from './components/CounterDisplay';
import Header from './components/header';
import Message from './components/Message.jsx';

function App() {

const projectName = "clicker game"
const [counter, setCounter] = useState(0); //state variable

  return (
    <>
      
  <Header 
    projectName={projectName} 
  />

   <CounterDisplay
      count={counter}
   />

    <Message 
      count={counter}
    />

    <CounterButtons
        title={"Increase"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <CounterButtons
        title={"Decrease"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />

    </>
  )
}

export default App

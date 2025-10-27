import { useState } from 'react'
import CounterButtons from "./components/CounterButtons";
import CounterDisplay from './components/CounterDisplay';
import Header from './components/Header';
import Message from './components/Message';
import ResetButton from './components/ResetButton';

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
      <ResetButton
        title={"Reset"}
        handleReset={() => {setCounter(0)}}
      />

    </>
  )
}

export default App

import { useState } from 'react'
import counterButtons from './components/counterButtons.jsx';


function App() {

const projectName = "clicker game"
const [counter, setCounter] = useState(0); //state variable

  return (
    <>
     <h1>{projectName}</h1>
    <counterButtons
        title={"Increase"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <counterButtons
        title={"Decrease"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />

    </>
  )
}

export default App

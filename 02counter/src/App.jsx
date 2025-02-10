import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(12)
  // let counter = 15;

  const addValue = () => {
    if (counter <20){
    counter = counter + 1 ; 
    
    setCounter(counter) }

  }

  return (
    <>
    <h1>chai aur react</h1>
    <h3>counter value : {counter}</h3>
    <button 
    onClick={addValue} disabled = {counter === 20}
    >Add value</button>
    <br />
    <button
    onClick={ () => setCounter(counter - 1)} disabled = {counter === 0}
    >Remove value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Timer from './components/Timer';
function App() {
  const [counter, setCounter] = useState(0);
  return <>
    <button onClick={()=> setCounter(c=>c+1)}>Increment</button>
    <Timer max={counter} ></Timer>
    <p>{counter}</p>
  </>
}

export default App

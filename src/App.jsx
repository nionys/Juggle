import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Timer from './components/Timer';
function App() {
  const [counter, setCounter] = useState(0);
  return <>
    <Counter increment={()=> setCounter(c=>c+1)}>Increment</Counter>
    <Timer max={counter} ></Timer>
    <p>{counter}</p>
  </>
}

export default App

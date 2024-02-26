import { useState } from "react";
import './App.css'
import Timer from './components/Timer';

const TIME_UNIT = 10;

export default function App() {
  console.log('app render');
  const [timer, setTimer] = useState(0);
  return <>
  <Timer
    onTick={() => setTimer(t=>t+TIME_UNIT)}
    timeUnit={TIME_UNIT}/>
  <p>{timer}</p>
  
  </>
}

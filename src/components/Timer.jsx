import { useState, useEffect, useRef } from "react";
import Stopwatch from "../classes/Stopwatch";
import './Timer.css'

export default function Timer(props) {
  console.log('timer render');
  const { onTick, timeUnit } = props;

  const [counter, setCounter] = useState(0);
  const stopwatchRef = useRef(new Stopwatch(0));  
  useEffect(() => {
    stopwatchRef.current.onTick = onTick;
  }, [onTick])
  useEffect(() => {
    stopwatchRef.current.dt = timeUnit;
  }, [timeUnit]);
  useEffect(() => {
    stopwatchRef.current.continueTo(counter*1000);
  }, [counter]);

  return <div className="Timer">
    <button onClick={()=> setCounter(c=>c+1)}>Increment Counter</button>
    <p>goal: {counter}{'\n'}current: {stopwatchRef.current.time/1000}</p>
  </div>;
}
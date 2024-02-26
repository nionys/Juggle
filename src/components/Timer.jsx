import { useEffect, useRef, useState } from "react";
import Stopwatch from "../Stopwatch";

const TIME_UNIT = 250;

export default function Timer(props) {
  const { max } = props;
  const [timer, setTimer] = useState(0);

  const stopwatchRef = useRef(new Stopwatch(TIME_UNIT));
  stopwatchRef.current.onTick = () => setTimer(t=> t+TIME_UNIT);

  useEffect(() => {
    stopwatchRef.current.continueTo(max*1000);
  }, [max]);

return <>
    <p>{timer}</p>
  </>;
}
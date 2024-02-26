import { useEffect, useRef, useState } from "react";

const TIME_UNIT = 10;

export default function Timer(props) {
  const { max } = props;
  console.log(max);
  const [timer, setTimer] = useState(0);
  const intervalId = useRef(null);
  useEffect(() => {
    console.log('uE max', max);
    if (intervalId.current === null) {
      intervalId.current = setInterval(tick, TIME_UNIT);
    }
  }, [max]);
  function tick() {
    if (timer <= max*1000) {
      console.log('if', timer, max*1000, timer+TIME_UNIT);
      setTimer(t => Math.min(max*1000, t+TIME_UNIT));
    } else {
      console.log('else');
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  return <>
    <p>{timer}</p>
  </>;
}
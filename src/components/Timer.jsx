import { useEffect, useRef, useState } from "react";

const TIME_UNIT = 10;

export default function Timer(props) {
  const { max } = props;
  const intervalId = useRef(null);
  const [clock, setClock] = useState(0);
  const time = {current: clock};
  useEffect(() => {
    const tick = () => {
      if (time.current < max*1000) {
        time.current = Math.min(max*1000, time.current+TIME_UNIT);
        setClock(time.current);
      } else {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
    intervalId.current = setInterval(tick, TIME_UNIT);
  }, [max]);

  return <>
    <p>{clock}</p>
  </>;
}
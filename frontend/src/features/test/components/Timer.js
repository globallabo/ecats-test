import { useState, useEffect } from "react";

export default function Timer({ duration, onTimeout }) {
  const [seconds, setSeconds] = useState(duration);
  //const duration = 10;

  function tick() {
    if (seconds === 0) {
      onTimeout();
      reset();
    } else {
      setSeconds(seconds - 1);
    }
  }

  const reset = () => setSeconds(duration);

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  });

  //let timeLeft = duration - seconds;
  return <div>Time left: {seconds}</div>;
}

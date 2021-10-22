import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

export default function Timer({ duration, onTimeout, currentQuestion }) {
  const [seconds, setSeconds] = useState(duration);
  const reset = () => setSeconds(duration);

  function tick() {
    if (seconds === 0) {
      onTimeout();
      reset();
    } else {
      setSeconds(seconds - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => reset(), [currentQuestion]);

  return <Box>残り時間 {seconds}</Box>;
}

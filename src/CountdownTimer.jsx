import { useState, useEffect } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleChange = (e) => {
    const value = Number(e.target.value);

    setSeconds(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(seconds);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <label>
        Set Time (seconds):
        <input
          type="number"
          value={seconds}
          onChange={handleChange}
        />
      </label>

      <h2>Time Left: {timeLeft} seconds</h2>

      <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
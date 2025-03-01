import React, { StrictMode, useState } from "react";
export default function StopwatchCounter() {
  const [timer, setTimer] = useState(0);
  function startTimer() {
    window.myTimer = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  }
  function pauseTimer() {
    clearInterval(window.myTimer);
  }
  function resetTimer() {
    clearInterval(window.myTimer);
    setTimer(0);
  }

  return (
    <StrictMode>
      <div className="stopwatch">
        <span className="stopwatch-time">
          {Math.trunc(timer / 60)} mins {timer % 60} secs
        </span>

        <div>
          <button className="stopwatch-button" onClick={startTimer}>
            Start
          </button>
          <button className="stopwatch-button" onClick={pauseTimer}>
            Pause
          </button>
          <button className="stopwatch-button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </StrictMode>
  );
}

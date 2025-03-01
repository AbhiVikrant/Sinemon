import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const DivButtonStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem"
  };
  const increase = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrease = () => {
    count > 0 ? setCount(count - 1) : alert("Counter can't be negative");
  };
  return (
    <>
      <h1>Hello use below counter : </h1>
      <div style={DivButtonStyle}>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      <span
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          fontSize: "8rem",
          backgroundColor: "black"
        }}
      >
        {count}
      </span>
    </>
  );
}

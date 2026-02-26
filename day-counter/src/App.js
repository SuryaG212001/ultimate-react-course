import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>count:{count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <span>step:{step}</span>
      <button
        onClick={() => {
          setStep((s) => s - 1);
        }}
      >
        -
      </button>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
              ? `${count} days form today is `
              : `${Math.abs(count)} days ago was`}
        </span>
        <span> {currentDate.toDateString()}</span>
      </p>
    </div>
  );
}

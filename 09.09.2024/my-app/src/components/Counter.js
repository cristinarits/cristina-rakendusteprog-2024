import React, { useState } from "react";
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const modifyCounter = (amount) => setCounter(prevCounter => prevCounter + amount);

  return (
    <div className="counter">
      <h1>{counter}</h1>

      {[+1, +5, +50, -1, -5, -50].map((element, index) => (
        <button key={index} onClick={() => modifyCounter(element)}>
          {element > 0 ? `+${element}` : element}
        </button>
      ))}

      <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
        async +1
      </button>
    </div>
  );
};

export default Counter;
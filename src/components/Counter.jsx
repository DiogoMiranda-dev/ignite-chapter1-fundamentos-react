import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleIncrement}>
        Increment +1
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement -1
      </button>
    </div>
  );
}

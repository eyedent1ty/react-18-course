import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addToCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const subtractToCount = () => {
    if (count > 10) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h4>The current count is...</h4>
      <h1>{count}</h1>
      <button onClick={subtractToCount}>-</button>
      <button onClick={addToCount}>+</button>
    </div>
  );
}

export default App;

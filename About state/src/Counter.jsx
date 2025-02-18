import React, { useState } from 'react';
import './App.jsx'
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}disabled={count === 0}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}

export default Counter;

import React ,{useState} from 'react';
import './App.css';
import Counter from "./Counter";
function App() {
  const[Count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}
export default App;
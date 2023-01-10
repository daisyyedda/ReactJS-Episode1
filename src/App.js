import styles from './App.module.css';
import { User } from './User'
import { useState } from 'react'

// JSX (function that returns HTML tags)
function App() {
  // state (a variable that are subject to change)
  const [count, setCount] = useState(0);

  // event is used to grab information about input


  /* effect when button is on click
  const increaseAge = () => {
    setAge(age - 1);
  };
  */

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  }

  return (
    // && followed by codes to execute should the condition be true
    // event (something that happens as a result of something else)
    <div className="App">
      <button onClick={() => {
        increaseCount(count);
      }}>Increase</button>
      
      <button onClick={() => {
        decreaseCount(count);
      }}>Decrease</button>
      
      <button onClick={() => {
        setToZero(count);
      }}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;

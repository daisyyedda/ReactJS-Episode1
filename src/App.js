import styles from './App.module.css';
import { User } from './User'
import { useState } from 'react'

// JSX (function that returns HTML tags)
function App() {
  // state (a variable that are subject to change)
  const [textColor, setTextColor] = useState("black");

  // event is used to grab information about input


  /* effect when button is on click
  const increaseAge = () => {
    setAge(age - 1);
  };
  */

  return (
    // && followed by codes to execute should the condition be true
    // event (something that happens as a result of something else)
    <div className="App">
      <button onClick={() => {
        // alternating the colors when clicking the button
        setTextColor(textColor === "black" ? "red" : "black");
      }}> Show/Hide Text </button>
      <h1 style={{color: textColor}}> HI MY NAME IS PEDRO </h1>
    </div>
  );
}

export default App;

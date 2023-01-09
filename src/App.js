import styles from './App.module.css';

// JSX (function that returns HTML tags)
function App() {
  const age = 19;
  const isGreen = true;

  return (
    // using ternary operators
    // && followed by codes to execute should the condition be true
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>} 
      <h1 style={{ color: isGreen ? "green" : "red" }}> THIS HAS COLOR </h1>
      {isGreen && <button> THIS IS A BUTTON </button>} 
    </div>
  );
}

// component (must start with capital letters)
const Job = (props) => { // props (the argument we passes into the document)
  return (
    <div>
        <h1> {props.salary} </h1>
        <h2> {props.position} </h2>
        <h2> {props.company} </h2>
    </div>
  );
}

export default App;

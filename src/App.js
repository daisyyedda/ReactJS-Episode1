import './App.css';

// JSX (function that returns HTML tags)
function App() {
  return (
    <div className="App"> 
      <Job salary={93034} position="Senior SDE" company="Ford" />
      <Job salary={190532} position="UI Designer" company="Google" />
      <Job salary={53414} position="Junior SDE" company="Amazon" />
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

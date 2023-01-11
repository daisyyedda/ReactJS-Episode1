/*
JSX (function that returns HTML tags)
state (a variable that are subject to change)
... (an array composed of everything in the old array and the new thing after)
&& (followed by codes to execute should the condition be true)
event (used to grab information about input)
*/

import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p> {generatedExcuse} </p>
    </div>
  );
}

export default App;

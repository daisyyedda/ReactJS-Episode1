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
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <input 
        placeholder="Ex. Pedro...." 
        onChange={(event) => {setName(event.target.value);
        }}
      />
      <button onClick={fetchData}> Predict Age </button>
      <h1> Name: {predictedAge?.name} </h1>
      <h1> Predicted Age: {predictedAge?.age} </h1>
      <h1> Count: {predictedAge?.count} </h1>
    </div>
  );
}

export default App;

import styles from './App.module.css';
import { User } from './User'
import { useState } from 'react'

// JSX (function that returns HTML tags)
// state (a variable that are subject to change)
// ... (an array composed of everything in the old array and the new thing after)
// && (followed by codes to execute should the condition be true)
// event (used to grab information about input)

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  
  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  // effect when button is on click
  // const increaseAge = () => {
  //   setAge(age - 1);
  // };

  return (  
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          // loop through the task and display to screen
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}

export default App;

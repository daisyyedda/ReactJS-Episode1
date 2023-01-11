import './App.css';
import { User } from './User'
import { useState } from 'react'

/*
JSX (function that returns HTML tags)
state (a variable that are subject to change)
... (an array composed of everything in the old array and the new thing after)
&& (followed by codes to execute should the condition be true)
event (used to grab information about input)
*/

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // object
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }


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
          return (<div>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

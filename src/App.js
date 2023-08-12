import { useState } from 'react';
import './App.css';

function App() {

  const [toDoList, setToDoList] = useState([]); 
  const [newTask, setNewTask] = useState(""); 

  const handleChane = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // const newToDoList = [...toDoList, newTask]
    setToDoList([...toDoList, newTask])
  }
   
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className='addTask'>
        <input onChange={handleChane}/>&nbsp;
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
          {toDoList.map((task) => {
            return <h1>{task}</h1>
          })}
      </div>
    </div>
  );
}

export default App;

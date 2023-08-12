import { useState } from 'react';
import './App.css';
import {Task} from './Task';

function App() {

  const [toDoList, setToDoList] = useState([]); 
  const [newTask, setNewTask] = useState("");
  // const [completeColor, setcompleteColor] = useState("black");

  const handleChane = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id + 1,
      taskName: newTask,
      completed: false
    }

    setToDoList([...toDoList, task])
  }

  const taskCompleted = (id) => {
    setToDoList(
      toDoList.map((task) =>{
        if(task.id === id){
          return{...task, completed:true};
        }else{
          return task;
        }
      })
    )
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
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
            return ( 
              <Task 
                  taskName={task.taskName} 
                  id={task.id}
                  completed={task.completed}
                  deleteTask={deleteTask}
                  taskCompleted={taskCompleted}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;

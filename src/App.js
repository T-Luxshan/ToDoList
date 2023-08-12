import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from 'react-icons/fa';
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
            <div className="container addTask">
              <h1 style={{padding:"10px"}} className="addTask-head">To-Do App</h1>
                <div className="row">
                  <div className="col-4">
                      <input className='textBox' onChange={handleChane} placeholder="Add your new todo"/>&nbsp;
                  </div>
                  <div className="col-4">
                      <button className='btn btn-outline-success addBtn' onClick={addTask}><FaPlus size={30} /></button>
                  </div>
                </div>
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

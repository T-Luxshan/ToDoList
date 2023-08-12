export const Task = (props) => {
  return (
    <div className="task"
    style={{backgroundColor: props.completed ? "green" : "white"}}>
              <h1>{props.taskName}</h1>
              <button onClick={() => props.taskCompleted(props.id)}>complete</button>
              <button onClick={() => props.deleteTask(props.id)}>X</button>
            </div>
  )
}

export default Task
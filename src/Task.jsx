export const Task = (props) => {
  return (
    <div 
    style={{backgroundColor: props.completed ? "green" : "white"}}>
          {/* <div class="card">
            <div class="card-body">
              {props.taskName}
            </div>
          </div> */}

          {/*  */}

          <div className="row">
                  <div className="col-4">
                      <div class="card">
                        <div class="card-body">
                          {props.taskName}
                        </div>
                      </div>
                  </div>
                  <div className="col-4">
                      <button onClick={() => props.taskCompleted(props.id)}>complete</button>
                      <button onClick={() => props.deleteTask(props.id)}>X</button>
                  </div>
                </div>

          {/*  */}
              {/* <h1>{props.taskName}</h1> */}
              {/* <button onClick={() => props.taskCompleted(props.id)}>complete</button>
              <button onClick={() => props.deleteTask(props.id)}>X</button> */}
            </div>
  )
}

export default Task
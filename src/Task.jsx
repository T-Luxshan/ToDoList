export const Task = (props) => {
  return (
    <div>
          <div className="row">
                  <div className="col-4">
                      <div style={{backgroundColor: props.completed ? "#198754" : "#f2f7fa",
                                  color: props.completed ? "white" : "black"}}class="card listItem">
                        <div class="card-body">
                          {props.taskName}
                        </div>
                      </div>
                  </div>
                  <div className="col-4 listBtns">
                      <button className="btn btn-outline-success listBtn1" onClick={() => props.taskCompleted(props.id)}>complete</button>
                      &nbsp;&nbsp;
                      <button className="btn btn-outline-danger listBtn2"  onClick={() => props.deleteTask(props.id)}>X</button>
                  </div>
                </div>
            </div>
  )
}

export default Task
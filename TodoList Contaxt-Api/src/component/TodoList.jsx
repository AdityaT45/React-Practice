import { useContext } from "react"
import { TodoContext } from "../store/TodoContext"


const TodoList = () => {
    const {todo}=useContext(TodoContext)
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <table className="table table-light table-bordered border-primary ">
            <tr >
                <th>#</th>
                <th>Todo item</th>
                <th>position</th>
            </tr>
            <tbody>
                
                    {todo.map((item)=><tr key={item.id}><td> {item.id}</td>
                                  <td>{item.todo}</td>
                                  <td><button style={{height:'30px',width:'100px',border:'none',backgroundColor: item.completed ? "green" : "red",
                    color: "white",
                    cursor: "pointer",}}>{item.completed ? "Yes" : "No"}</button></td></tr>)}
                
            </tbody>
        </table>
        </div>
        <div className="col-2"></div>
      </div>
        
    </div>
  )
}

export default TodoList
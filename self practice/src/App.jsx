import { useState } from "react"



const App = () => {


  const [text,setText]=useState(' ')
  const [todo,setTodo]=useState([])




 

  
  const handleInput=(e)=>{
    setText(e.target.value)
  }

  const handleTodo=()=>{
    const addTodo=[...todo,text]
    setTodo(addTodo)
    setText("")
  }


  const handleDelete=(item)=>{
    console.log(item)
    const updatedTodo=todo.filter((todoItem) => todoItem !== item)
    setTodo(updatedTodo)
  }







  return (
    <div className="div border border-info m-5" style={{width:"400px",marginTop:"30px",padding:"20px"}}>
            <h2 className="text text-center">Todo List</h2>   
            <div className="row">
              <div className="col-8">
              <input type="text" className="form-control" value={text} onChange={(e)=>handleInput(e)}/>
              </div>

              <div className="col-4">
              <button onClick={handleTodo} className="btn btn-primary">Add Todo</button>
              </div>
            </div>




{todo.map((item,index)=>{return  <div key={index} className="row pt-3">
              <div className="col-7 ">
              <h3 >{item}</h3></div>

              <div className="col-5">
              <button className="btn btn-warning btn-sm mx-1" >update</button>
              <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(item)}>delete</button>
              </div>
            </div>



 

})}
      
    
    </div>
  )
}

export default App
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import TodoList from './component/TodoList'
import { TodoContext } from './store/TodoContext'

const App = () => {
  const[todo,setTodo]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/todos')
    .then(res=>res.json())
    .then((data)=>{
      setTodo(data.todos)
    })

  },[])

  return (
    <TodoContext.Provider value={{todo}}>
    <div>
      <h1 className='text-center m-4 bg-light p-3'>Todo Tasks</h1>
      <TodoList/>
    </div>
    </TodoContext.Provider>
  )
}

export default App
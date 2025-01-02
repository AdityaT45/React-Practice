import { useState } from "react";
import { useEffect } from "react"


const App = () => {
   
  const [user,setUser]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data=>{
      setUser(data.users)
      console.log(data)
    });
  },[])
  return (


    

    <>
    <h1> all users</h1>

    <ul>
      
      {user.map((item)=><li key={item.id}>{item.firstName}</li>
      )}
    </ul>
    </>
  )
}

export default App
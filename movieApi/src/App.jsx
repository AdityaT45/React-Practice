import { useState } from "react"
import { useEffect } from "react"


const App = () => {
  const[movies,setMovies]=useState([])
  const[name,setName]=useState([])

    useEffect(()=>{
      fetch(`https://www.omdbapi.com/?s=${name}&apikey=a61a4775`)
      .then((res)=>res.json())
      .then((data)=>{
        setMovies(data.Search)
      })
    },[])


    const handleMovieName=(e)=>{
      setName(e.target.value)
      

    }
  return (
      
    <div>App
        
      <input onChange={handleMovieName} value={name}></input>
      
      {movies.map((movie)=>
          <li key={movie.imdbID}>{movie.Title}</li>)} 
    </div>






  )
}

export default App
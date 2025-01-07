import { useState } from "react"
import { useEffect } from "react"
import { MemeContext } from "./store/MemeContext"
import Meme from "./components/Meme"
import Spinner from "./components/Spinner"


function App() {

  const[data,setData]=useState([])
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
   
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then((response)=>{
      setData(response.data.memes),
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
            
    })
  },[])


  return (
    <MemeContext.Provider value={data}>
     
     {!isLoading ? <Meme/>:<Spinner/> } 
      
     
      
      
    </MemeContext.Provider>
  )
}

export default App

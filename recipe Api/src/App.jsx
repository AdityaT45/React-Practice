
import { useState } from 'react'
import { useEffect } from 'react'
import RecipeWrapper from './RecipeWrapper'
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {

  const[recipe,setRecipe]=useState([])


  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
    .then(res=>res.json())
    .then((data)=>{
      setRecipe(data.recipes),
      console.log(data)
    })
    
  },[])
  return (
    <div>
      <h1 className='text-center mt-3 bg-light '>Explore Delicious Recipes</h1>
      <RecipeWrapper recipe={recipe} ></RecipeWrapper>
      
      
    </div>
  )
}

export default App
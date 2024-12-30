import React,{useState} from 'react'

const App = () => {
  

  const [color,setColor]=useState('')

  const handleColor=(e)=>{
    setColor(e.target.value)
  }
  return (
    <div  className='color-pickier-container'>
    <h1>color picker</h1>
     <div className='color-display' style={{backgroundColor:color}}>
      <h4>selected name : {color} </h4>
    </div> 

    <label>select color</label>
    <input value={color} type='color' onChange={handleColor}/> 
    </div>
  )
}

export default App
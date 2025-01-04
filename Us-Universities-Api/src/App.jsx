import  { useEffect, useState } from 'react'
import Loding from './Loding'
import University from './University'

const App = () => {

  const[data,setData]=useState([])
  const[loding,setLoading]=useState([true])

  useEffect(()=>{
    fetch('http://universities.hipolabs.com/search?country=United+States')
    .then((res)=>res.json())
    .then(data=>{setData(data),
      setLoading(false)
    })
  })

if (loding) {
  return (
    
    <Loding/>
  );
}

  return (
    <University data={data}/>
  )
}

export default App

import { useState } from 'react';
import { useEffect } from 'react';
import ProductListWrapper from './ProductListWrapper';

const App = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
      setData(data.products)
      console.log(data)
    })
    
  },[])
  return (
    <>

    <ProductListWrapper data={data}/>
    </>


  )
}

export default App
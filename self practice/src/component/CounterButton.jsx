// import React from 'react'

// eslint-disable-next-line react/prop-types
const CounterButton = ({handleDecrease,handleAdd,handleReset}) => {
  return (
    <div>
        
      <button className="btn btn-danger" onClick={handleDecrease}> subtract </button>
      <button className="btn btn-primary" onClick={handleAdd}> add </button>
      <button className="btn btn-warning" onClick={handleReset}> reset </button>
    </div>
  )
}

export default CounterButton
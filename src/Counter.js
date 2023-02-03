import React, { useState } from 'react'
const initialcount = 0;

const Counter = () => {
    const [count,setCounter]= useState(initialcount)
  return (
    <>
    <h1>{count}</h1>
      <button onClick={()=> setCounter(count + 1)}>Inc</button>
      <button onClick={()=>count >0? setCounter(count - 1) : initialcount}>Dec</button>
      <button onClick={()=> setCounter(initialcount)}>Reset</button>
    </>
  )
}

export default Counter

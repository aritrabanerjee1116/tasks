import React,{useState} from 'react'

const Task1 = () => {

  const [state, setstate]=useState(0)

  const inc = () =>{
    setstate(num=>num+1)
  }
  const dec = () =>{
    setstate(num=>num-1)
  }
  const res = () =>{
    setstate(0)
  }
  return ( 
    <div className='task'>
      <h1>{state}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={res}>Reset</button>
    </div>
  )
}

export default Task1
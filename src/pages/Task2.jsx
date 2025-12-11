import React, { useState } from 'react'

const Task2 = () => {
  const[state,setstate]=useState(true)

  const passtype = () =>{
    if(state==false){
      return "text"
    }else{
      return "password"
    }
  }
  const toggle =()=>{
    setstate(!state)
  }
  
  return (
    <div className='task'>
      <input type={passtype()} />  
      <button onClick={toggle}>{state?"Show" : "Hide"}</button> 
    </div>
  )
}

export default Task2
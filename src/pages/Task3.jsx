import React,{useState} from 'react'

const Task3 = () => {
  const[isLiked,setIsLiked]=useState(false)
  const[count,setCount]=useState(0)

  const toggle = () =>{
    setIsLiked(!isLiked);

  }
  
  return (
    <div className='task'>
      {isLiked?1 : 0}
      <button onClick={toggle} >{isLiked?"Liked" : "Like"}</button>
    </div>
  )
}

export default Task3
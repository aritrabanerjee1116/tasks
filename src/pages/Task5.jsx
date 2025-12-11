import React,{useState} from 'react'

const Task5 = () => {
  const[isLiked1,setIsLiked1]=useState(false)
  const[isLiked2,setIsLiked2]=useState(false)
  const[isLiked3,setIsLiked3]=useState(false)
  const[count,setCount]=useState(0)

  const toggle1 = () =>{
    if(isLiked1){
         setCount(count=>count-1)
    }
    if(!isLiked1){
         setCount(count=>count+1)
    }
    setIsLiked1(!isLiked1);
    

  }
  const toggle2 = () =>{
      if(isLiked2){
         setCount(count=>count-1)
    }
    if(!isLiked2){
         setCount(count=>count+1)
    }

    setIsLiked2(!isLiked2);

  }
  const toggle3 = () =>{
      if(isLiked3){
         setCount(count=>count-1)
    }
    if(!isLiked3){
         setCount(count=>count+1)
    }
    setIsLiked3(!isLiked3);

  }
  
  return (
    <div className='task'>
        {count}
        <div>
       
          <button onClick={toggle1} >{isLiked1?"Liked" : "Like"}</button>
        </div>
        <div>
    
          <button onClick={toggle2} >{isLiked2?"Liked" : "Like"}</button>
        </div>
        <div>
    
          <button onClick={toggle3} >{isLiked3?"Liked" : "Like"}</button>
        </div>
    </div>
  )
}

export default Task5